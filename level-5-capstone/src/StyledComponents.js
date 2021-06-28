import styled from 'styled-components'


// const GlobalStyle = createGlobalStyle`
//     background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
// `
const UserCard = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between; 
    height: 100px;
    width: 360px;
    border: 1px solid #000000;
    border-radius: 24px;
    margin: 8px auto;
    padding: 16px;
    background-image: linear-gradient(to top, #09203f 0%, #537895 100%);

    :hover {
        box-shadow: 4px 4px 4px #121212;
        background-image: linear-gradient(to top, #08103e 30%, #537895 100%);

    }
    `

const Image = styled.img`
    height: 100%;
    width: auto;
    border-radius: 50%;
    margin: auto 0;
    justify-self: flex-start;
`

const UserCardName = styled.label`
    font-size: 4.8rem;
    font-family: --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-transform: capitalize;
    font-weight: 300;
    color: #ffffff;
`
export {
    Image,
    UserCard,
    UserCardName
}