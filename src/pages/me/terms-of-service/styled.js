import styled from "styled-components";

const get = (obj, path, fb) =>
  path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj) ?? fb;

export const TermsPageContainer = styled.main`
  --c-text:   ${({ theme }) => get(theme, "COLORS.WHITE_1", "#ffffff")};
  --c-subtle: ${({ theme }) => get(theme, "COLORS.WHITE_2", "rgba(255,255,255,.85)")};
  --c-muted:  ${({ theme }) => get(theme, "COLORS.WHITE_3", "rgba(255,255,255,.72)")};
  --accent:   ${({ theme }) => get(theme, "COLORS.PURPLE_1", "#a58bff")};
  --accent-2: ${({ theme }) => get(theme, "COLORS.PINK_1",   "#ff66cc")};

  color: var(--c-text);
  min-height: 100vh;

  .terms_page {
    .hero {
      min-height: 220px;
      display: grid;
      align-items: end;
    }

    .hero_inner {
      max-width: 1100px;
      margin: 0 auto;
      padding: 56px 20px 40px;
      text-align: left;
    }

    .page_title {
      margin: 0 0 6px;
      font-size: ${({ theme }) => get(theme, "FONTS.SIZES.S40", "40px")};
      line-height: 1.15;
    }

    .content {
      padding: 24px 16px 80px;
    }

    .content_inner {
      max-width: 820px;
      margin: 0 auto;
      padding: 28px 22px 36px;
      background: #111;
      border: 1px solid rgba(255,255,255,.08);
      border-radius: 20px;
      box-shadow: 0 18px 60px rgba(0,0,0,.35);
    }

    .section + .section {
      margin-top: 36px;
    }

    .section_title {
      margin: 0 0 14px;
      font-size: ${({ theme }) => get(theme, "FONTS.SIZES.S24", "24px")};
      position: relative;
    }

    .section_title::after {
      content: "";
      display: block;
      width: 72px;
      height: 3px;
      margin-top: 10px;
      background: linear-gradient(90deg, var(--accent-2), var(--accent));
      border-radius: 2px;
      opacity: .9;
    }

    .section_text {
      color: var(--c-muted);
      line-height: 1.92;
      font-size: 16px;
    }

    .section_list {
      list-style: decimal;
      padding-left: 1.25rem;
      margin: 10px 0 14px;
    }

    .section_list li {
      margin: 8px 0;
      line-height: 1.92;
    }

    .section_bullets {
      list-style: disc;
      padding-left: 1.25rem;
      margin: 6px 0 14px;
    }

    .section_bullets li {
      margin: 6px 0;
      line-height: 1.9;
    }

    
    .section_text .section_link,
    .section_list .section_link,
    .section_bullets .section_link {
      color: hsl(6 78% 55% / 1);          
      text-decoration: underline;
      text-underline-offset: 2px;
      transition: color .15s ease, opacity .15s ease, text-decoration-color .15s ease;
    }

    .section_text .section_link:hover,
    .section_list .section_link:hover,
    .section_bullets .section_link:hover {
      color: hsl(6 88% 90% / 1);
      opacity: 1;
      text-decoration: none;
    }


    .section_text .section_link:focus-visible,
    .section_list .section_link:focus-visible,
    .section_bullets .section_link:focus-visible {
      outline: 2px solid hsl(6 78% 55% / 1);
      outline-offset: 2px;
      border-radius: 4px;
      text-decoration: none;
    }

    .subheading {
      margin: 14px 0 8px;
      font-weight: 700;
      color: var(--c-subtle);
    }

    .updated_at {
      margin-top: 28px;
      padding-top: 16px;
      border-top: 1px solid rgba(255,255,255,.12);
      color: var(--c-subtle);
      font-size: 13px;
      text-align: right;
    }
  }
`;