import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}


@keyframes modalZoomIn {
    from {
        opacity:0;
        transform:scale(0);
    }
    to{
        opacity:1;
        transform:scale(1);
    }
  }

  @keyframes fadeIn {
      from{
          opacity:0;
      }
      to{
          opacity:1;
      }
  }
  :root{
      --height-header:6rem;
      --swe-white:#fff;
      --swe-black:#000;
      --swe-text-color:#000;
      --swe-orange:#f36c21;
      --swe-grey:#ccc;
      --swe-grey-1: #f2f3f5;
      --swe-base-font-size: 14px;
      --swe-grey-2: #bec0c4;
    --swe-grey-3: #797b7e;
    --swe-grey-4: #505152;
    --swe-grey-5: #669aa1;
    --swe-grey-6: #e1e2e4;
    --swe-heading-font-size-h1: 72px;
    --swe-heading-font-size-h2: 56px;
    --swe-heading-font-size-h3: 44px;
    --swe-heading-font-size-h4: 32px;
    --swe-heading-font-size-h5: 24px;
    --swe-heading-font-size-h6: 16px;
    --swe-heading-font-weight: 600;
    --swe-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --swe-shadow:0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  }

  *,*::after,*::before{
      box-sizing:inherit;
      padding: 0;margin: 0;
  }

  html{
      font-size:62.5%;
      box-sizing:border-box;
      -webkit-text-size-adjust:100%;
      -webkit-tap-highlight-color:transparent;
      font-family:'Francois One','Roboto', sans-serif ;
      
  }

  body{
      overflow-x:hidden;
      background-color:var(--swe-white);
      font-size:var(--swe-base-font-size);
      color:var(--swe-text-color);
      line-height:1.5;
  }

  img{
      max-width:100%;
      display:block;
  }

  a{
      text-decoration:unset;
      display:inline-block;
      color:inherit;
  }

  span{display:inline-block}

  ul,ol{
      list-style:none;
  }

  input,button{
      font-family:inherit;
      font-size:inherit;
      outline:0;
  }


  .container{
      width:100%;
      max-width:1370px;
      padding:0 1.5rem;
      margin: 0 auto;
  }

  .row{
      display:flex;
  }

  h1{
      font-size:var(--swe-heading-font-size-h1);
  }
  h2{
      font-size:var(--swe-heading-font-size-h2);
  }
  h3{
      font-size:var(--swe-heading-font-size-h3);
  }
  h4{
      font-size:var(--swe-heading-font-size-h4);
  }
  h5{
      font-size:var(--swe-heading-font-size-h5);
  }
  h6{
      font-size:var(--swe-heading-font-size-h6);
  }


  

`;
