import React from "react";
import { iconList } from "../../Datas/iconData";

// Button 내 들어가는 아이콘 컴포넌트
const Icon = (props) => {
    const { iconName } = props;
    return <i>{iconList.filter((item) => iconName === item.name)[0].icon()}</i>;
};

export default Icon;
