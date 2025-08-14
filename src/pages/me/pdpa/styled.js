import styled from "styled-components";

const get = (obj, path, fb) =>
  path.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), obj) ?? fb;

export const PdpaContainer = styled.main`
  --c-text:   ${({ theme }) => get(theme, "COLORS.WHITE_1", "#ffffff")};
  --c-subtle: ${({ theme }) => get(theme, "COLORS.WHITE_2", "rgba(255,255,255,.85)")};
  --c-muted:  ${({ theme }) => get(theme, "COLORS.WHITE_3", "rgba(255,255,255,.72)")};
  --accent:   ${({ theme }) => get(theme, "COLORS.PURPLE_1", "#a58bff")};
  --accent-2: ${({ theme }) => get(theme, "COLORS.PINK_1",   "#ff66cc")};
  .pdpa_container {
    background-color: #0f0f0f;
    color: white;
    min-height: 100vh;
  }

  .pdpa_main_wrapper {
    margin: 0 auto;
    max-width: 80rem; /* max-w-7xl */
    padding: 2rem 1rem 4rem 1rem; /* py-8 px-4, md:py-16 */
    
    @media (min-width: 768px) {
      padding: 4rem 1rem;
    }
  }

  /* Header styling */
  .pdpa_title {
    text-align: center;
    font-size: 2.5rem; /* text-4xl */
    font-weight: bold;
    letter-spacing: -0.025em;
    margin-bottom: 2.5rem;
    padding: 2.5rem 0 4rem 0; /* py-10 md:py-16 */
    
    @media (min-width: 640px) {
      font-size: 3rem; /* sm:text-5xl */
    }
    
    @media (min-width: 1024px) {
      font-size: 3.75rem; /* lg:text-6xl */
      padding: 4rem 0;
    }
  }

  .pdpa_intro_paragraph {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.625;
    font-size: 1rem;
    margin-bottom: 1rem;
    background-color: #111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    
    @media (min-width: 640px) {
      padding: 2rem;
    }
    
    @media (min-width: 768px) {
      padding: 3rem;
    }
    
    @media (min-width: 1024px) {
      padding: 4rem;
    }
  }

  .pdpa_section_wrapper {
    background-color: #111;
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 1.5rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    padding: 1rem;
    
    @media (min-width: 640px) {
      padding: 2rem;
    }
    
    @media (min-width: 768px) {
      padding: 3rem;
    }
    
    @media (min-width: 1024px) {
      padding: 4rem;
    }
  }

  /* Section styling */
  .pdpa_section {
    &:not(:first-child) {
      margin-top: 2rem;
      
      @media (min-width: 768px) {
        margin-top: 3rem;
      }
    }
  }

  .pdpa_section_title_wrapper {
    margin-bottom: 1rem;
  }

  .pdpa_section_title {
    font-size: 1.5rem; /* text-2xl */
    font-weight: bold;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 1rem;
    
    @media (min-width: 640px) {
      font-size: 1.875rem; /* sm:text-3xl */
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4rem;
      height: 0.25rem;
      background: linear-gradient(to right, #a855f7, #ec4899);
      border-radius: 9999px;
      opacity: 0.9;
    }
  }

  /* Paragraph styling */
  .pdpa-paragraph-container {
    margin-bottom: 1rem;
  }

  .pdpa_paragraph {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.625;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  /* List styling */
  .pdpa_list {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.625;
    font-size: 1rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }

  .pdpa_complex_list {
    list-style-type: decimal;
    list-style-position: inside;
    margin-bottom: 1rem;
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.625;
    font-size: 1rem;
    
    li {
      margin-bottom: 1rem;
    }
  }

  .pdpa_complex_list_item_title {
    font-weight: bold;
    color: rgba(255, 255, 255, 0.85);
  }

  .pdpa_sub_list {
    list-style-type: disc;
    list-style-position: inside;
    margin-left: 1rem;
    margin-top: 0.5rem;
    
    li {
      margin-bottom: 0.25rem;
    }
  }

  .pdpa_links_container {
    margin-top: 0.5rem;
    color: rgba(255, 255, 255, 0.72);
  }

  .pdpa_link {
    color: #ec4899;
    text-decoration: underline;
    text-underline-offset: 2px;
    
    &:hover {
      text-decoration: none;
    }
  }

  .pdpa_link_separator {
    margin: 0 0.25rem;
  }

  .pdpa_additional_text {
    margin-left: 0.25rem;
  }

  .pdpa_after_list_content {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.625;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  /* Last updated styling */
  .pdpa_last_updated {
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    text-align: center;
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.72);
  }
`;
    