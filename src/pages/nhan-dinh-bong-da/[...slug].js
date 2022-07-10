import React from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PostContentPages from '../[...slug]';
library.add(fab, faCheck, faMinus, faPlus);

function PostCommentaryFootball(props) {
    return (
        <div>
            <PostContentPages />
        </div>
    );
}

export default PostCommentaryFootball;