import {bindActionCreators} from 'redux';
import { useDispatch } from 'react-redux';
import { addSimpsonsAction, deleteSimpsonsAction, getListAction } from '~/modules/simpsons/actions';
import { jumpDownSimpsons, jumpUpSimpsons } from '~/modules/simpsons/slice';
const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      getListAction,
      deleteSimpsonsAction,
      jumpDownSimpsons,
      jumpUpSimpsons,
      addSimpsonsAction,
    },
    dispatch,
  );
};
export default useActions;
