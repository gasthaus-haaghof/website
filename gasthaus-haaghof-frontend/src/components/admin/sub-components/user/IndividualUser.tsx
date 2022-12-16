import styled from "@emotion/styled";
import { Avatar, Chip, Tooltip, Typography } from "@mui/material";

interface IndividualUserProps {
    name: string,
    password: string,
}

export const IndividualUser = ({ name, password }: IndividualUserProps) => {
    const handleClick = () => {

    };

    return (
        <StyledIndividualUser>
            <Tooltip title={password}>
                <Chip
                    avatar={<Avatar>{name[0].toUpperCase()}</Avatar>}
                    label={name}
                    style={{ width: "15rem", height: "2.5rem" }}
                    variant="outlined"
                    onClick={handleClick}
                />
            </Tooltip>
        </StyledIndividualUser>
    );
};

const StyledIndividualUser = styled.div`
    margin-bottom: 1rem;
`;