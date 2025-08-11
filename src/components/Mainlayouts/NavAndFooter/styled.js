import styled from "styled-components";

export const NavAndFooterStyles = styled.div`
  width: 100dvw;
  min-height: 100dvh;
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  font-size: ${({ theme }) => theme.FONTS.SIZES.S14};
  font-weight: ${({ theme }) => theme.FONTS.WEIGHTS.REGULAR};
`;

export const FooterStyles = styled.footer`
  background: ${({ theme }) => theme.COLORS.BLACK_2};
  color: ${({ theme }) => theme.COLORS.WHITE_1};
  padding: 28px 0 0;


  .inner{
    width:100%;
    max-width:1200px;     
    margin:0 auto;
    padding:0 20px;
    box-sizing:border-box;
  }

  .top{
    display:grid;
    grid-template-columns: 1fr auto;
    gap:32px;
    align-items:start;
  }

  .left .logo img{
    height:44px; width:auto; display:block; margin-bottom:16px;
  }

  .footer-menu{
    display:flex; flex-wrap:wrap; gap:20px 28px; margin-bottom:14px;
  }
  .footer-menu a{
    color:${({ theme }) => theme.COLORS.WHITE_1};
    text-decoration:none; font-weight:600;
  }

  .muted{
    color:${({ theme }) => theme.COLORS.GRAY_1};
    font-size:${({ theme }) => theme.FONTS.SIZES.S16};
  }

  .right{ display:grid; gap:16px; justify-items:end; }
  .actions{ display:flex; gap:12px; }
  .btn{
    display:inline-flex; align-items:center; gap:8px;
    background:#2a2a2a; border:0; border-radius:8px;
    padding:8px 14px; color:${({ theme }) => theme.COLORS.WHITE_1};
    cursor:pointer; font-weight:700;
  }
  .call{ display:grid; justify-items:end; }
  .call .label{ color:${({ theme }) => theme.COLORS.GRAY_1}; margin-bottom:4px; }
  .call .number{ font-size:38px; font-weight:800; line-height:1; }


  .bottom{
  padding: 10px 0 22px;
  display:grid; grid-template-columns:1fr auto; align-items:center;
  }

  .policy{ display:flex; gap:36px; }
  .policy a{
    color:${({ theme }) => theme.COLORS.GRAY_1}; text-decoration:none; font-weight:500;
  }



  @media (max-width: 992px){
    .top{ grid-template-columns:1fr; gap:20px; }
    .right{ justify-items:start; }
    .call{ justify-items:start; }
    .bottom{ grid-template-columns:1fr; }
    .policy{ gap:24px; }
  }
  @media (max-width:640px){
    .footer-menu{ gap:12px 18px; }
    .call .number{ font-size:32px; }
  }
`;