import React, { useEffect } from "react";
import { setPageTitle } from "../../utils/utils";
import { profile } from "../../data/navCategories/categories";
import { Box } from "../../components/accountbox/box.component";
import { StyledBoxContainer } from "./profile.styles";
import "./profile.style.css";
export const UserProfile = () => {
  setPageTitle("Your Account");
  for (let i = 0; i <= 12; i++) {
    return (
      <StyledBoxContainer className="box body">
        {profile.map((profile) => (
          <Box
            key={profile.id}
            url={"/notfound"}
            title={profile.title}
            description={profile.description}
            imgurl={profile.imgurl}
          />
        ))}
      </StyledBoxContainer>
    );
  }
};
