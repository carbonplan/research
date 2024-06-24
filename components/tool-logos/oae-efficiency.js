import { useThemeUI } from 'theme-ui'

const Logo = () => {
  const { theme } = useThemeUI()

  return (
    <svg
      viewBox='0 0 150 100'
      fill='none'
      width='100%'
      height='100%'
      preserveAspectRatio='xMidYMid slice'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M65.2354 -28.8945H69.4316V-25.5456H73.6143V-22.1564H77.8105V-18.7268H82.0067V-11.7063H77.8105V2.87279H65.2354V6.62515H61.0392V-0.839227H56.843V-4.51089H52.6603V-11.7063H48.4641V-15.2434H52.6603V-18.7268H56.843V-22.1564H61.0392V-25.5456H65.2354V-28.8945Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M128.124 -28.8945V-25.5456H132.307V-18.7268H136.503V-15.2434H132.307V-11.7063H128.124V-4.51089H123.928V2.87279H119.732V-0.839224H107.157V-4.51089H102.961V-11.7063H98.7781V-15.2434H102.961V-25.5456H111.353V-28.8945H128.124Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M77.8105 -11.7062H102.961V-4.51082H107.157V2.87286H102.961V6.62522H98.778V14.2375H94.5818V18.1109H86.1895V14.2375H77.8105V-11.7062Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M40.0852 -15.2434H48.4641V-11.7062H52.6603V-4.51083H56.8431V-0.83916H61.0392V10.4179H56.8431V14.2375H35.889V10.4179H31.6928V6.62521H27.4966V-8.12869H35.889V-11.7062H40.0852V-15.2434Z'
        fill={theme.colors.blue}
        fillOpacity='0.63'
        stroke={theme.colors.background}
      />
      <path
        d='M132.307 -15.2434H140.7V-11.7062H144.882V-4.51083H149.078V-0.83916H153.275V6.62521H149.078V10.4179H144.882V14.2375H140.7V18.1109H132.307V14.2375H123.928V-4.51083H128.124V-11.7062H132.307V-15.2434Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M10.7253 -18.7268V-15.2435H14.9215V-11.7063H19.1176V-8.12877H23.3138V-4.51091H27.4966V-0.83924H23.3138V2.87278H19.1176V6.62514H10.7253V10.4178H-1.84983V6.62514H-10.2288V2.87278H-6.03257V-11.7063H-10.2288V-15.2435H2.34635V-18.7268H10.7253Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M27.4966 -0.839203V6.62517H31.6928V10.4179H35.8889V14.2375H40.0851V18.1109H35.8889V22.0112H31.6928V29.9194H14.9215V25.9518H6.54254V10.4179H10.7253V6.62517H19.1177V2.87281H23.3138V-0.839203H27.4966Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M40.0852 14.2375H52.6603V18.1109H56.8431V22.0112H52.6603V25.9518H44.2679V22.0112H40.0852V14.2375Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M107.157 -0.839203H119.732V2.87281H123.928V25.9518H119.732V29.9194H107.157V25.9518H98.7781V18.1109H94.5819V14.2375H98.7781V6.62517H102.961V2.87281H107.157V-0.839203Z'
        fill={theme.colors.blue}
        fillOpacity='0.63'
        stroke={theme.colors.background}
      />
      <path
        d='M153.275 2.87283H157.471V6.62519H161.654V14.2375H165.85V18.1109H170.046V22.0112H174.242V25.9519H170.046V29.9194H165.85V33.9138H144.882V25.9519H140.7V14.2375H144.882V10.4179H149.079V6.62519H153.275V2.87283Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M-10.2287 6.62521H-1.84978V10.4179H6.5426V29.9194H2.34641V33.9139H-14.4249V29.9194H-18.6211V25.9519H-22.8038V22.0112H-27V18.1109H-22.8038V14.2375H-14.4249V10.4179H-10.2287V6.62521Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M40.0852 18.1109V22.0112H44.268V37.9486H40.0852V33.9138H35.8891V29.9194H31.6929V22.0112H35.8891V18.1109H40.0852Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M52.6603 22.0112H61.0392V29.9194H56.8431V33.9138H52.6603V37.9486H44.2679V25.9518H52.6603V22.0112Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M77.8105 2.87283V14.2375H86.1894V18.1109H82.0067V25.9519H77.8105V33.9139H73.6143V37.9486H65.2354V33.9139H56.843V29.9194H61.0392V22.0112H56.843V18.1109H52.6603V14.2375H56.843V10.4179H61.0392V6.62519H65.2354V2.87283H77.8105Z'
        fill={theme.colors.blue}
        stroke={theme.colors.background}
        fillOpacity='0.9'
      />
      <path
        d='M123.928 14.2375H132.307V18.1109H140.7V25.9518H144.882V37.9486H140.7V41.9969H123.928V33.9138H119.732V25.9518H123.928V14.2375Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M6.54252 25.9519H14.9214V29.9195H23.3138V41.9969H19.1176V50.1741H2.34633V41.9969H-1.84985V37.9487H-6.03259V33.9139H2.34633V29.9195H6.54252V25.9519Z'
        fill={theme.colors.blue}
        fillOpacity='0.6'
        stroke={theme.colors.background}
      />
      <path
        d='M82.0068 18.1109H98.7781V25.9519H107.157V29.9194H102.961V37.9486H98.7781V46.0855H82.0068V41.9969H77.8106V37.9486H73.6144V33.9138H77.8106V25.9519H82.0068V18.1109Z'
        fill={theme.colors.blue}
        fillOpacity='0.6'
        stroke={theme.colors.background}
      />
      <path
        d='M52.6603 33.9138H65.2354V50.1741H61.0392V58.432H56.8431V62.5878H48.4641V58.432H44.2679V54.303H40.0852V37.9486H52.6603V33.9138Z'
        fill={theme.colors.blue}
        fillOpacity='0.6'
        stroke={theme.colors.background}
      />
      <path
        d='M102.961 29.9194H119.732V33.9138H123.928V54.303H107.157V50.1741H102.961V46.0855H98.7781V37.9486H102.961V29.9194Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M144.882 33.9138H165.85V41.9969H170.046V50.1741H165.85V54.303H144.882V50.1741H140.7V37.9486H144.882V33.9138Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M23.314 29.9194H35.8891V33.9138H40.0853V54.303H27.4967V58.432H23.314V50.1741H19.1178V41.9969H23.314V29.9194Z'
        fill={theme.colors.blue}
        fillOpacity='0.6'
        stroke={theme.colors.background}
      />
      <path
        d='M123.928 41.9969H140.7V50.1741H144.882V58.432H140.7V66.7571H123.928V41.9969Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M-14.4249 33.9138H-6.03253V37.9486H-1.8498V41.9969H2.34639V50.1741H6.54258V54.303H2.34639V58.432H-1.8498V62.5878H-10.2287V58.432H-14.4249V54.303H-18.6211V50.1741H-22.8038V46.0855H-18.6211V37.9486H-14.4249V33.9138Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M65.2354 37.9486H77.8105V41.9969H82.0067V46.0854H86.1894V54.303H82.0067V62.5878H77.8105V66.757H69.4316V62.5878H61.0392V50.174H65.2354V37.9486Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M6.54256 50.1741H23.3139V70.9264H6.54256V62.5878H2.34637V54.303H6.54256V50.1741Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M86.1895 46.0855H102.961V50.1741H107.157V66.7571H102.961V70.9264H90.3856V66.7571H82.0067V54.303H86.1895V46.0855Z'
        fill={theme.colors.blue}
        fillOpacity='0.51'
        stroke={theme.colors.background}
      />
      <path
        d='M27.4967 54.303H44.268V58.432H48.4642V62.5878H52.6604V66.7571H48.4642V75.1091H31.6929V79.2918H27.4967V75.1091H23.314V58.432H27.4967V54.303Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M144.882 54.303H161.654V62.5878H165.85V70.9264H161.654V75.1091H140.7V58.432H144.882V54.303Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M2.34637 58.432V62.5878H6.54256V70.9264H10.7253V75.1091H6.54256V83.488H2.34637V87.6708H-1.84981V83.488H-10.2287V75.1091H-14.4249V66.7571H-10.2287V62.5878H-1.84981V58.432H2.34637Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M61.0392 58.432V62.5878H69.4316V66.7571H73.6143V83.488H69.4316V87.6708H56.843V83.488H52.6603V79.2919H48.4641V66.7571H52.6603V62.5878H56.843V58.432H61.0392Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M82.0068 62.5878V66.7571H90.3857V70.9264H94.5819V83.488H90.3857V91.8535H77.8106V87.6708H73.6144V66.7571H77.8106V62.5878H82.0068Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M107.157 54.303H123.928V66.7571H128.124V70.9264H123.928V75.1091H119.732V79.2918H115.536V75.1091H107.157V70.9264H102.961V66.7571H107.157V54.303Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M128.124 66.757H140.7V75.1091H144.882V79.2918H140.7V91.8535H136.503V96.0362H128.124V91.8535H119.732V75.1091H123.928V70.9263H128.124V66.757Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M48.4641 75.1091V79.2919H52.6603V83.488H56.8431V87.6708H52.6603V91.8535H48.4641V96.0363H31.6928V91.8535H27.4966V79.2919H31.6928V75.1091H48.4641Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M144.882 75.1091H161.654V83.488H165.85V91.8535H161.654V96.0363H144.882V91.8535H140.7V79.2919H144.882V75.1091Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M10.7253 70.9264H23.3139V75.1091H27.4966V91.8535H23.3139V96.0363H6.54256V87.6708H2.34637V83.488H6.54256V75.1091H10.7253V70.9264Z'
        fill={theme.colors.blue}
        fillOpacity='0.43'
        stroke={theme.colors.background}
      />
      <path
        d='M94.5818 70.9264H107.157V75.1091H115.536V79.2919H119.732V91.8535H111.353V96.0363H98.778V91.8535H94.5818V87.6708H90.3856V83.488H94.5818V70.9264Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M73.6143 83.488V87.6708H77.8105V91.8535H82.0067V112.673H65.2354V108.531H61.0392V87.6708H69.4316V83.488H73.6143Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M90.3856 87.6708H94.5818V91.8535H98.778V96.0363H107.157V112.673H82.0067V91.8535H90.3856V87.6708Z'
        fill={theme.colors.blue}
        fillOpacity='0.43'
        stroke={theme.colors.background}
      />
      <path
        d='M-1.84983 87.6708H6.54254V96.0363H14.9215V112.673H-10.2288V96.0363H-6.03257V91.8535H-1.84983V87.6708Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M23.3138 91.8535H31.6927V96.0363H40.0851V112.673H14.9214V96.0363H23.3138V91.8535Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M52.6603 87.6708H61.0392V108.531H65.2354V112.673H40.0852V96.0363H48.4641V91.8535H52.6603V87.6708Z'
        fill={theme.colors.blue}
        fillOpacity='0.43'
        stroke={theme.colors.background}
      />
      <path
        d='M111.353 91.8535H128.124V96.0363H132.307V112.673H107.157V96.0363H111.353V91.8535Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
      <path
        d='M136.503 91.8535H144.882V96.0363H157.471V112.673H132.307V96.0363H136.503V91.8535Z'
        fill={theme.colors.blue}
        fillOpacity='0.35'
        stroke={theme.colors.background}
      />
    </svg>
  )
}

export default Logo
