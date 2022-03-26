import React from "react";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Rating} from "@mui/material";
import {ReviewType} from "../../../types/ReviewType";

interface ExpandableReviewDialogProps {
    open: boolean,
    handleClose: () => void,
    review: ReviewType,
}

export const ExpandableReviewDialog = ({ open, handleClose, review }: ExpandableReviewDialogProps) => {
    return(
        <>
            <Dialog  open={open} onClose={handleClose}>
                <DialogTitle id="dialog">
                    {review.authorName} sagt:
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {review.text}
                    </DialogContentText>
                    <br />
                    <Rating value={review.rating} readOnly style={{ justifySelf: "end" }}/>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>Schließen</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
