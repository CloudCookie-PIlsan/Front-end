import reactDom from "react-dom";

const ModalPortal = ({ children }) => {
    const elem = document.getElementById("portal-target"); // 모달 컴포넌트 뿌릴 엘리먼트 선택
    return reactDom.createPortal(children, elem);
};

export default ModalPortal;
