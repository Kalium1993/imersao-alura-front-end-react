import React from "react";
import './Header.css';
import smallRight from '../../assets/icons/small-right.png';
import smallLeft from '../../assets/icons/small-left.png';
import search from '../../assets/icons/search.png';
import $ from 'jquery'

const Header = function Header() { 
    const searchFn = function() {
        const searchInput = $('#search-input');
        const resultArtist = $('#result-artist');
        const resultPlaylists = $('#result-playlists');
    
        function requestApi(searchTerm) {
            const url = `http://localhost:3030/artists?name_like=${searchTerm}`;
            fetch(url)
                .then((response) => response.json())
                .then((result) => displayResults(result))
        }
    
        function displayResults(result) {
            resultPlaylists.addClass('hidden');
            const artistName = $('#artist-name');
            const artistImage = $('#artist-img');
    
            result.forEach(element => {
                artistName.text(element.name);
                artistImage.attr('src', element.urlImg);
            });
    
            resultArtist.removeClass('hidden');
        }
    
        document.addEventListener('input', function() {
            const searchTerm = searchInput.val().toLowerCase();
            if (searchTerm === '') {
                resultArtist.addClass('hidden');
                resultPlaylists.removeClass('hidden');
                return;
            }
    
            requestApi(searchTerm);
        })
    }
    return(
        <nav className="header-navigation">
            <div className="navigation">
                <button className="arrow-left">
                    <img src={smallLeft} alt="Seta esquerda" />
                </button>
                <button className="arrow-right">
                    <img src={smallRight} alt="Seta direita" />
                </button>
            </div>

            <div className="header-search">
                <img src={search} alt="" />
                <input onChange={searchFn} id="search-input" type="text" maxLength="800" placeholder="O que você quer ouvir?" />
            </div>

            <div className="header-login">
                <button className="subscribe">Inscreva-se</button>
                <button className="login">Entrar</button>
            </div>
        </nav>
    );
};

export default Header;