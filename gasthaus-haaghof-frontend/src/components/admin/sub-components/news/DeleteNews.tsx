import styled from "@emotion/styled";
import { Button, FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Api } from "../../../../api/api";
import { NewsType } from "../../../../types/NewsType";

interface DeleteNewsProps {
    token: string,
}

export const DeleteNews = ({ token }: DeleteNewsProps) => {
    const [news, setNews] = useState<Array<NewsType>>([]);
    const [selectedNews, setSelectedNews] = useState<number>(0);

    useEffect(() => {
        Api.News.getAll()
            .then(result => setNews(result));
    }, []);

    const handleChange = (e: any) => {
        setSelectedNews(e.target.value);
    };

    const deleteNews = () => {
        Api.News.deleteNews(token, selectedNews);
    };

    return (
        <StyledDeleteNews>
            <Typography gridArea="heading" marginBottom="2rem">Löschen von veröffentlichten News</Typography>
            <FormControl fullWidth style={{ gridArea: "news" }}>
                <InputLabel id="demo-simple-select-label">News zum Löschen auswählen</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectedNews}
                    label="Bitte News zum Löschen auswählen..."
                    onChange={handleChange}
                >
                    {
                        news && news.map(singleNews =>
                            <MenuItem key={singleNews.id} value={singleNews.id}>{singleNews.heading}</MenuItem>
                        )
                    }
                </Select>
            </FormControl>
            <Button style={{ gridArea: "button" }} variant="outlined" disabled={!selectedNews} onClick={deleteNews}>Löschen</Button>
        </StyledDeleteNews>
    );
};

const StyledDeleteNews = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-areas: "heading heading" "news button";
`;