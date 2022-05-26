import { Loader } from '../components/Loader';
import { Editor } from '../components/Editor';
import { Errors } from '../components/Errors';
import { InfoAlert } from '../components/Alert';
import { Filters } from '../components/Filters';
import { Redirects } from '../components/Redirects';
import { useRedirectTool } from '../utils/useRedirectTool';

export const RedirectTool = () => {
  const { editor, filter, errors, submitted, loading, filteredResults } = useRedirectTool();

  return (
    <>
      <Editor {...editor} />
      <Errors errors={errors} />
      <Filters {...filter} />
      {submitted && !filteredResults.length ? <InfoAlert>Your Filter Returned Back no Results.</InfoAlert> : null}
      <Redirects redirects={filteredResults} />
      {loading ? <Loader /> : null}
    </>
  );
};
