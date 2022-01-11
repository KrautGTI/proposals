import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { openDialog } from "../../../features/dialogs";
import { getShouldPreventUpdates } from "../../../lib/selectors";

interface ManageSystemCostButtonProps {
  className?: string;
}

const ManageTaxCreditsButton: FC<ManageSystemCostButtonProps> = ({ children, className, ...rest }) => {
  const dispatch = useDispatch();
  const shouldPreventUpdates = useSelector(getShouldPreventUpdates);

  const handleClick = useCallback(() => {
    if (shouldPreventUpdates) {
      dispatch(openDialog("DEAL_LOCKED"));
    } else {
      dispatch(openDialog("MANAGE_TAX_CREDIT"));
    }
  }, [dispatch, shouldPreventUpdates]);

  return (
    <>
      <button type="button" className={className} onClick={handleClick} {...rest}>
        {children}
      </button>
    </>
  );
};

export default ManageTaxCreditsButton;
