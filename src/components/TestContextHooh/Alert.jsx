import { useMyContext } from 'components/TestContextHooh/AlertContext';

export const Alert = () => {
  const { isShow } = useMyContext();
  return isShow && <div>Some mesage</div>;
};
