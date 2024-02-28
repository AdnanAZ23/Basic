import { useState } from 'react'

export const useDisclose = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };
    return { onClose, onOpen, open }
}
