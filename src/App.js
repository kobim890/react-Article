import React from 'react';
import {Article} from "./Article/Article";
import {CommentList} from "./Article/CommentList/CommentList";
import {Comment} from "./Article/CommentList/Comment/Comment";

const image = "https://media-cdn.tripadvisor.com/media/photo-s/12/56/c7/13/getlstd-property-photo.jpg";

function App() {
  return (
    <div className="App">
        <Article
         title={'Why do we use it?'}
         content={'It is a long established fact that a reader will be distracted by the readable content of a page when'+
         ' looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of' +
         ' letters, as opposed to using Content here, content here, making it look like readable English. Many' +
         ' desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a' +
         ' search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved' +
         ' over the years, sometimes by accident, sometimes on purpose (injected humour and the like).'}
         image={"https://media-cdn.tripadvisor.com/media/photo-s/12/56/c7/13/getlstd-property-photo.jpg"}
        />
        <CommentList/>
        <Comment
            author={'israel israeli'}
            date={'1/1/2020'}
            content={'this is comment number 1'}
        />
        <Comment
            author={'Yossi Yosefyan'}
            date={'1/2/2020'}
            content={'this is comment number 2'}
        />
        <Comment
            author={'Sasi Sasson'}
            date={'1/3/2020'}
            content={'this is comment number 3 '}
        />
    </div>
  );
}

export default App;
