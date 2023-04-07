const { useMyContext } = require('components/TestContextHooh/AlertContext');

export const Maine = () => {
  const { setIsShow } = useMyContext();
  return (
    <div>
      <p>Hello Context</p>
      <button type="button" onClick={() => setIsShow(prev => !prev)}>
        Show/Hide
      </button>
    </div>
  );
};
