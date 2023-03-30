import React, { useEffect, useRef, useState } from "react";
import { TermsSection } from "../../Utilities/Utilities";
import TermsData from "../../TermsData";
const Terms = () => {

  return (
    <div>
      {TermsData?.map((ele) => (
        <TermsSection
          {...ele}

        />
      ))}
    </div>
  );
};

export default Terms;
