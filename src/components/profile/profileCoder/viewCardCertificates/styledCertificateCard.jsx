const styles = {
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Center child elements vertically
    width: '36.5rem', // 584px igual que la card
    margin: '1rem auto',
  },
  headerContainer: {
    width: '25.813rem', // Set width for the header container
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: '1rem',
    margin: '0 auto', // Center horizontally within mainContainer
  },
  headerTitle: {
    fontSize: '2rem', // 24px
    fontWeight: '700',
    color: '#f74702',
    fontFamily: 'Poppins',
  },
  cardContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '36.5rem', // 584px
    height: '9.8125rem', // 157px
    border: '0.063rem solid #f74702', // 2px
    boxShadow: '0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.1), 0 -0.25rem 0.375rem -0.063rem rgba(0, 0, 0, 0.06)',
    borderRadius: '0.625rem', // 10px
    padding: '0.625rem', // 10px
    boxSizing: 'border-box',
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '8.313rem', // 133px
    height: 'auto',
    marginRight: '0.5rem', // 8px
    marginLeft: '0.5rem', // 8px
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    fontSize: '1.125rem', // 24px
    fontWeight: '500',
    color: 'black',
    fontFamily: 'Poppins',
    marginBottom: '0.3125rem', // 5px
  },
  school: {
    fontSize: '1.125rem', // 14px
    fontWeight: '300',
    color: 'black',
    fontFamily: 'Poppins',
    marginBottom: '0.3125rem', // 5px
  },
  dates: {
    fontSize: '1.125rem', // 14px
    fontWeight: '300',
    color: 'black',
    fontFamily: 'Poppins',
    marginBottom: '0.3125rem', // 5px
  },
  buttonContainer: {
    marginLeft: 'auto',
    minWidth: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
};

export default styles;
