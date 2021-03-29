import React from 'react';
import {render} from '@testing-library/react';
import {filmsAdapted} from '../../tests-mocks';
import PreviewPlayer from './preview-player';


describe(`PreviewPlayer `, () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = () => {};
    window.HTMLMediaElement.prototype.load = () => {};
    window.HTMLMediaElement.prototype.pause = () => {};
  });

  it(`should render correctly`, () => {

    const {container} = render(
        <PreviewPlayer
          isPlaying={true}
          src={filmsAdapted[0].previewVideoLink}
          poster={filmsAdapted[0].previewImage}/>
    );

    expect(container).toMatchSnapshot();
  });

});
