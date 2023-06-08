import React, { useState, useRef, useEffect } from "react";
// import useCheckMobileView from "../../hook/usecheckMobileView";
import { Radio, Button, ButtonGroup } from "@walmart-web/livingdesign-components";
import { ChevronDown } from "@livingdesign/icons";
// import { storeList } from "./disputeContent";
import Modal from "./BottomSheet"
const storeList = [
    {
      name: "Walmart",
      value: "Walmart",
    },
    {
      name: "Sam's",
      value: "Sams",
    },
]
const ServiceFilter = (props) => {
  const { position, StoreList, selectedStore, handleSubmit, disabled, marketFilterDisabled } =
    props;
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef();
//   const isMobile = useCheckMobileView();
  const [checked, setChecked] = useState(selectedStore);
  useEffect(() => {
    setChecked(selectedStore);
  }, [selectedStore]);

  const handleOnChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setChecked(value);
    }
  };

  const handleClearAll = () => {
    setChecked("Walmart");
  };

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
    setChecked(selectedStore);
  };
  const footerHandleSubmit = (checked) => {
    handleSubmit(checked);
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      title="Segment"
      onClose={handleCloseClick}
      position={position}
      triggerRef={triggerRef}
      desktopVariant={"MENU"}
      hasNubbin={false}
      triggerComponent={() => (
        <Button
          disabled={disabled}
          ref={triggerRef}
          trailing={<ChevronDown />}
          onClick={() => handleButtonClick()}
          size="small"
          variant="secondary"
          UNSAFE_className={`dispute-filter-btn ${marketFilterDisabled ? "isSelected" : ""}`}
          data-testid = 'segment-filter-btn'
        >
          {
            storeList.find((item) => {
              return item.value === checked;
            }).name
          }
        </Button>
      )}
      footerComponent={() => (
        <ButtonGroup UNSAFE_className="btn-group-block">
          <Button
            size="small"
            onClick={() => footerHandleSubmit(checked)}
            // isFullWidth={isMobile}
            variant="primary"
          >
            {"Confirm"}
          </Button>
          {
            <Button
              size="small"
              onClick={() => handleClearAll()}
              variant="tertiary"
            //   isFullWidth={isMobile}
            >
              {"Revert to default"}
            </Button>
          }
        </ButtonGroup>
      )}
      content={
        <>
          <div className="popover_dorpdown__title">Segment</div>
          <div className="popover_dorpdown__subtext">
            Sam’s Club data is only available in the US market
          </div>
          {StoreList.map((item, index) => {
            return (
              <div className="popover_dorpdown__input" key={item.name}>
                <Radio
                  label={item.name}
                  name={item.name}
                  onChange={(e) => handleOnChange(e)}
                  value={item.value}
                  checked={checked === item.value}
                />
              </div>
            );
          })}
        </>
      }
    >
      <>
        <div className="popover_dorpdown__subtext">
          Sam’s Club data is only available in the US market
        </div>

        {StoreList.map((item, index) => {
          return (
            <div className="popover_dorpdown__input" key={item.name}>
              <Radio
                label={item.name}
                name={item.name}
                onChange={(e) => handleOnChange(e)}
                value={item.value}
                checked={checked === item.value}
              />
            </div>
          );
        })}
      </>
    </Modal>
  );
};

export default ServiceFilter;