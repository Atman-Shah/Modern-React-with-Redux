import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary >I accept!</Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );

    return <div className="relative">
        <Button primary onClick={handleClick}>Open Modal</Button>
        {showModal && modal}
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel leo ut ipsum aliquam ultrices nec ut metus. Curabitur eget elementum nibh. Sed tempor, lorem hendrerit iaculis dictum, felis risus consequat metus, at porta mauris metus vel mi. Phasellus tristique porttitor massa ac ullamcorper. Donec lobortis hendrerit accumsan. Pellentesque eget diam vel tellus varius suscipit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse at tortor vitae tellus condimentum accumsan. Cras rhoncus ante et eros condimentum mollis. Donec sagittis ipsum et sagittis feugiat. Etiam eu est sapien.
        </p>
    </div>;
}

export default ModalPage;