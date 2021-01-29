/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-tabs */
/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-unused-expressions */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { SRLWrapper } from 'simple-react-lightbox';
import images from '../../../Data';
import './Galeria.css';
import {
  StyleCriacao, TituloCriacao, MenuCriacao, options,
} from './Criacao.elements';

export function Criacao() {
  const [tag, setTag] = useState('todos');
  const [filteredImages, setFilteredImages] = useState([]);

  useEffect(
    () => {
      tag === 'todos' ? setFilteredImages(images) : setFilteredImages(images.filter((image) => image.tag === tag));
    },
    [tag],
  );

  return (
		<StyleCriacao id="criacao">
            <TituloCriacao>Criação</TituloCriacao>
			<MenuCriacao>
                <TagButton name="todos" tagActive={tag === 'todos' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="instalação" tagActive={tag === 'instalação' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="canário" tagActive={tag === 'canário' ? true : false} handleSetTag={setTag} /> /
				<TagButton name="ração" tagActive={tag === 'ração' ? true : false} handleSetTag={setTag} />
			</MenuCriacao>
			<SRLWrapper options={options}>
				<div className="container">
					{filteredImages.map((image) => (
						<div key={image.id} className="image-card">
							<a href={`/images/${image.imageName}`}>
								<img className="image" src={`/images/${image.imageName}`} alt="" />
							</a>
						</div>
					))}
				</div>
			</SRLWrapper>
		</StyleCriacao>
  );
}

const TagButton = ({ name, handleSetTag, tagActive }) => (
		<button className={`tag ${tagActive ? 'active' : null}`} onClick={() => handleSetTag(name)}>
			{name.toUpperCase()}
		</button>
);

export default Criacao;
