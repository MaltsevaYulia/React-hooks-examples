import { AlertContext } from './TestContextHooh/AlertContext';
import { Alert } from './TestContextHooh/Alert';
import { Maine } from './TestContextHooh/Maine';
import { SkipMountExample } from './SkipMountExample/SkipMountExample';

export const App = () => {
  return (
    <>
      <AlertContext>
        <div>
          <Maine />
          <Alert />
        </div>
      </AlertContext>
      <SkipMountExample />
    </>
  );
};
