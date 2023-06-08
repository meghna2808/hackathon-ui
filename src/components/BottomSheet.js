import React from "react";
import { BottomSheet, Modal, Panel, Popover } from "@walmart-web/livingdesign-components";
// import useCheckMobileView from "./usecheckMobileView.js";
const BottomSheetModal = (props) => {
  const isMobile = false;
  const {isOpen, onClose, title, footerComponent, triggerComponent} = props
  return (
    <>
      {!isMobile && renderVariant(props)}
      {isMobile && (
        <span>
          {triggerComponent && triggerComponent()}
          <BottomSheet 
            UNSAFE_className={props?.UNSAFE_className}
            isOpen={isOpen}
            onClose={onClose}
            title={title} 
            actions={footerComponent && footerComponent()}>
            {props.children}
          </BottomSheet>
        </span>
      )}
    </>
  );
};

const renderVariant = (props) => {
  const {isOpen, onClose, title, footerComponent, triggerComponent, position, size} = props
  switch (props.desktopVariant) {
    case "MENU":
      return (
        <MenuComponent {...props} />
      );
    case "SIDEPANEL":
      return (
        <>
          {triggerComponent && triggerComponent(null)}
          <Panel
            isOpen={isOpen}
            onClose={onClose}
            position={position}
            size={size}
            title={title}
            actions={footerComponent && (
              <div className="BottomSheetModal_align">
                {footerComponent()}
              </div>)
            }
          >
            {props.children}
          </Panel>
        </>
      );
    case "Modal":
      return (
        <>
          {triggerComponent && triggerComponent(null)}
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            size={size}
            title={title}
            actions={ footerComponent && (
              <div className="BottomSheetModal_align">
                {footerComponent()}
              </div>)
            }
          >
            {props.children}
          </Modal>
        </>
      );
    default:
      return <></>;
  }
};

export const MenuComponent = (props) => {
  const { isOpen, onClose, content, position, triggerComponent, triggerRef, width, footerComponent } = props;
  return (
        <Popover
          isOpen={isOpen}
          onClose={onClose}
          content={
            <>
              <div className="popup_inner_container" style={{width: width}}>
                {content}
              </div>
              {footerComponent && (<div className="BottomSheetModal_align">
                {footerComponent && footerComponent()}
              </div>)}
            </>
          }
          position={position}
          hasNubbin
          triggerRef={triggerRef}
          UNSAFE_className="popover_custom"
        >
          {triggerComponent && triggerComponent()}
        </Popover>
  );
};

export default BottomSheetModal;
