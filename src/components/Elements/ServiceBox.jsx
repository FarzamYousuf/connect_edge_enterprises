import React from "react";
import styled from "styled-components";
// Assets
// import RollerIcon from "../../assets/svg/Services/RollerIcon";
// import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
// import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
// import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import HardwareIcon from "../../assets/svg/Services/hardware_solution_Icon.png";
import SoftwareIcon from "../../assets/svg/Services/software_solution_Icon.png";
import MarketingIcon from "../../assets/svg/Services/marketing_solution_Icon.png";
import NetworkIcon from "../../assets/svg/Services/network_solution_Icon.png";
import TrasnportaionIcon from "../../assets/svg/Services/transportation_solution_Icon.png";
import VehicleIcon from "../../assets/svg/Services/vehicle_solution_Icon.png";
import RenovationIcon from "../../assets/svg/Services/renovation_solution_Icon.png";
import ElectricIcon from "../../assets/svg/Services/electric_solution_Icon.png";


export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon = "";

  switch (icon) {
    case "hardwareSolution":
      getIcon = HardwareIcon;
      break;
    case "softwareSolution":
      getIcon = SoftwareIcon;
      break;
    case "marketingSolution":
      getIcon = MarketingIcon;
      break;
    case "networkSolution":
      getIcon = NetworkIcon;
      break;
    case "transportationSolution":
      getIcon = TrasnportaionIcon;
      break;
    case "vehicleSolution":
      getIcon = VehicleIcon;
      break;
    case "renovationSolution":
      getIcon = RenovationIcon;
      break;
    case "electricSolution":
      getIcon = ElectricIcon;
      break;
    default:
      getIcon = HardwareIcon;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      {/* <IconStyle>{getIcon}</IconStyle> */}

      <ImgStyle src={getIcon} alt="client logo" />

      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
// const IconStyle = styled.div`
//   @media (max-width: 860px) {
//     margin: 0 auto;
//   }
// `;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;
const ImgStyle = styled.img`
  width: 30%;
  height: 50%;
`;
