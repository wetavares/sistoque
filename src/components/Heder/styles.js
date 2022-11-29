import styled from 'styled-components';

export const AreaHeader = styled.div`
  height: 60px;
  /* background-color: darkcyan; */
  background-image: linear-gradient(to right, #07BFC1FF, #029D9FFF);
  color: #fff;
  text-decoration: none;

  .container{
    padding: 5px 20px;
    display: flex;
    align-items: center;
  }
    .logo{
      flex: 1;

      img{
        width: 45px;
      }
    }

    .nav-bar{
      margin-right: 40%;
      

      .itens{
        color: #0D47A1;
        &:hover{
          color: #fff;
        }
      }
      /* ul{
        display: flex;
        
      }

        li{
          
          list-style: none;
          margin-left: 20px;

          a{
            text-decoration: none;
            color: #fff;

            &:hover{
              color: #07DADCFF;
            }
          }
        } */
    }
`;
