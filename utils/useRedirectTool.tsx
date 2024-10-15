import chunk from 'lodash.chunk';
import { eachLimit } from 'async';
import { useState, ChangeEventHandler, MouseEventHandler, useEffect, useCallback } from 'react';

import { validate } from '../utils/validation';
import { getStatusCode } from '../utils/helpers';

export type Errors = Record<'message', string>;

export type Statuses = '2' | '4' | '5';

interface Chain {
  headers: {
    [key: string]: string;
  };
  statusCode: number;
  index: number;
  url: string;
}

export interface IResult {
  chain: Chain[];
  index: number;
  resolved: string;
  source: string;
}

const defaultUrls = [
  'https://batch301.wp-unite.io/source/url.html',
  'https://batch301.wp-unite.io/super/test/url/page.html',
].join('\n');

export const useRedirectTool = () => {
  const [errors, setErrors] = useState<Errors[]>([]);
  const [text, setText] = useState<string>(defaultUrls);
  const [results, setResults] = useState<IResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredResults, setFilteredResults] = useState<IResult[]>([]);
  const [selectedStatus, setSelectedStatus] = useState<Statuses | null>(null);

  const editorOnChangeHandler: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setErrors(validate(event.currentTarget.value));
    setText(event.currentTarget.value);
  };

  const editorOnClickHandler: MouseEventHandler<HTMLButtonElement> = async () => {
    try {
      setLoading(true);

      const redirects = text.split('\n').filter((txt) => txt.length);
      var chunkedRedirects = chunk(redirects, 5);

      await eachLimit(chunkedRedirects, 6, async (chunkedRedirect) => {
        const response = await fetch('https://6coxy6cu1d.execute-api.us-west-2.amazonaws.com/live/', {
          method: 'POST',
          mode: 'cors',
          redirect: 'follow',
          body: JSON.stringify(chunkedRedirect),
        });
        const results: IResult[] = await response.json();
        setResults((oldResults) => [...oldResults, ...results]);
      });

      setSubmitted(true);
      setLoading(false);
      setErrors([]);
    } catch (error) {
      console.error(error);
      setErrors((prevErrors) => [{ message: (error as Error).message }, ...prevErrors]);
    }
  };

  const filter = useCallback(() => {
    var list = results;

    if (searchText) {
      list = list.filter((item) => {
        return item.source.toLowerCase().search(searchText) !== -1;
      });
    }

    if (selectedStatus) {
      list = list.filter((item) => {
        return `${getStatusCode(item)}`[0] === selectedStatus;
      });
    }

    return list;
  }, [results, searchText, selectedStatus]);

  useEffect(() => {
    setFilteredResults(filter());
  }, [results, filter]);

  const searchHandler: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchText(event.currentTarget.value);
  };

  const statusButtonHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    const selectedFilter = event.currentTarget.dataset.filter || null;

    const filterselection = selectedFilter === selectedStatus ? null : selectedFilter;

    setSelectedStatus(filterselection as Statuses);
  };

  return {
    editor: {
      disabled: !!errors.length || loading,
      value: text,
      onChange: editorOnChangeHandler,
      onClick: editorOnClickHandler,
    },
    filter: {
      searchChange: searchHandler,
      searchText,
      statusChange: statusButtonHandler,
      status: selectedStatus,
    },
    submitted,
    loading,
    errors,
    results,
    filteredResults,
  };
};
