import React from 'react';
import {
    StyledCardPopoverContainer,
    StyledCardPopoverTitle,
    StyledCardPopoverText,
    ButtonContainer,
    StyledButton110
} from './styledCardPopover';

const CardPopover = ({ title, text, confirmText, cancelText, onConfirm, onCancel, onlyOne }) => {
    return (
        <StyledCardPopoverContainer>
            <div>
                <StyledCardPopoverTitle>{title}</StyledCardPopoverTitle>
                <StyledCardPopoverText>{text}</StyledCardPopoverText>
            </div>
            <ButtonContainer>
                {onlyOne ? (
                    <StyledButton110 onClick={onConfirm}>{confirmText}</StyledButton110>
                ) : (
                    <>
                        <StyledButton110 onClick={onCancel}>{cancelText}</StyledButton110>
                        <StyledButton110 onClick={onConfirm}>{confirmText}</StyledButton110>
                    </>
                )}
            </ButtonContainer>
        </StyledCardPopoverContainer>
    );
};

export default CardPopover;
