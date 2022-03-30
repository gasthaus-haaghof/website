import styled from "@emotion/styled";
import {Typography} from "@mui/material";

interface AddressProps {
    address: string,
}

export const Address = ({ address } : AddressProps) => {
    return (
      <StyledAddress className="address">

          <div className="wavy" style={{ height: "150px", overflow:"hidden", position: "absolute", marginTop: "-8rem", display: "none" }}>
              <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: "100%", width: "100%"}}>
                  <path d="M0.00,49.98 C150.00,150.00 343.11,-99.17 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: "none", fill: "rgba(25, 25, 25, 1)"}}/>
              </svg>
          </div>

          <Typography variant="h3">„Hunger“ auf mehr?</Typography>
          <Typography variant="h6" className="long">Kommen Sie einfach vorbei! Sie finden uns hier:</Typography>
          <Typography variant="h6" className="short">Kommen Sie einfach vorbei!</Typography>
          <Typography>{ address }</Typography>
      </StyledAddress>
    );
};

const StyledAddress = styled.div`
    margin-top: 5rem;
    display: grid;
    grid-template-columns: auto;
    gap: 1rem;
    
    h6.short {
        display: none;
    }
`;
