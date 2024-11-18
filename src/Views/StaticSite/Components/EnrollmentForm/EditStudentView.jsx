import React, { useEffect, useState, useMemo, useRef } from 'react'
import { Country, State, City } from 'country-state-city'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import './popup.scss'
//import CommonBanner from '../Common-banner'
//import baseDomain, { background } from '../../assets/images/imageAsset'
import InnerNavComponent from '../InnerNavComponent'
import '../EnrollmentForm/formstyles.scss';
import { useSelector } from 'react-redux';
import InputComponent from '../InputComponent';
import Other from './Other';
import Select from 'react-select'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { parsePhoneNumberFromString, isValidPhoneNumber } from 'libphonenumber-js'
import { authBaseDomain, cmsBaseDomain, razorPayKey } from '../../../../Constants/appSettings'
import axios from 'axios'
import { validateEmail } from '../../../../helpers'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { logoutUserAction } from '../../Views/Authentication/Auth.actions';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';

const libraries = ['places'];
const mapKey = 'AIzaSyCArozsi_1fWJgSwDFDAoA_6Q5zLZ7NYyA';
const countriesMap = [
  { label: 'Afghanistan', value: '+93', flag: 'AF' },
  { label: 'Albania', value: '+355', flag: 'AL' },
  { label: 'Algeria', value: '+213', flag: 'DZ' },
  { label: 'Andorra', value: '+376', flag: 'AD' },
  { label: 'Angola', value: '+244', flag: 'AO' },
  { label: 'Antigua and Barbuda', value: '+1-268', flag: 'AG' },
  { label: 'Argentina', value: '+54', flag: 'AR' },
  { label: 'Armenia', value: '+374', flag: 'AM' },
  { label: 'Australia', value: '+61', flag: 'AU' },
  { label: 'Austria', value: '+43', flag: 'AT' },
  { label: 'Azerbaijan', value: '+994', flag: 'AZ' },
  { label: 'Bahamas', value: '+1-242', flag: 'BS' },
  { label: 'Bahrain', value: '+973', flag: 'BH' },
  { label: 'Bangladesh', value: '+880', flag: 'BD' },
  { label: 'Barbados', value: '+1-246', flag: 'BB' },
  { label: 'Belarus', value: '+375', flag: 'BY' },
  { label: 'Belgium', value: '+32', flag: 'BE' },
  { label: 'Belize', value: '+501', flag: 'BZ' },
  { label: 'Benin', value: '+229', flag: 'BJ' },
  { label: 'Bhutan', value: '+975', flag: 'BT' },
  { label: 'Bolivia', value: '+591', flag: 'BO' },
  { label: 'Bosnia and Herzegovina', value: '+387', flag: 'BA' },
  { label: 'Botswana', value: '+267', flag: 'BW' },
  { label: 'Brazil', value: '+55', flag: 'BR' },
  { label: 'Brunei', value: '+673', flag: 'BN' },
  { label: 'Bulgaria', value: '+359', flag: 'BG' },
  { label: 'Burkina Faso', value: '+226', flag: 'BF' },
  { label: 'Burundi', value: '+257', flag: 'BI' },
  { label: 'Cabo Verde', value: '+238', flag: 'CV' },
  { label: 'Cambodia', value: '+855', flag: 'KH' },
  { label: 'Cameroon', value: '+237', flag: 'CM' },
  { label: 'Canada', value: '+1', flag: 'CA' },
  { label: 'Central African Republic', value: '+236', flag: 'CF' },
  { label: 'Chad', value: '+235', flag: 'TD' },
  { label: 'Chile', value: '+56', flag: 'CL' },
  { label: 'China', value: '+86', flag: 'CN' },
  { label: 'Colombia', value: '+57', flag: 'CO' },
  { label: 'Comoros', value: '+269', flag: 'KM' },
  { label: 'Congo, Democratic Republic of the', value: '+243', flag: 'CD' },
  { label: 'Congo, Republic of the', value: '+242', flag: 'CG' },
  { label: 'Costa Rica', value: '+506', flag: 'CR' },
  { label: 'Croatia', value: '+385', flag: 'HR' },
  { label: 'Cuba', value: '+53', flag: 'CU' },
  { label: 'Cyprus', value: '+357', flag: 'CY' },
  { label: 'Czech Republic', value: '+420', flag: 'CZ' },
  { label: 'Denmark', value: '+45', flag: 'DK' },
  { label: 'Djibouti', value: '+253', flag: 'DJ' },
  { label: 'Dominica', value: '+1-767', flag: 'DM' },
  { label: 'Dominican Republic', value: '+1-809', flag: 'DO' },
  { label: 'Ecuador', value: '+593', flag: 'EC' },
  { label: 'Egypt', value: '+20', flag: 'EG' },
  { label: 'El Salvador', value: '+503', flag: 'SV' },
  { label: 'Equatorial Guinea', value: '+240', flag: 'GQ' },
  { label: 'Eritrea', value: '+291', flag: 'ER' },
  { label: 'Estonia', value: '+372', flag: 'EE' },
  { label: 'Eswatini', value: '+268', flag: 'SZ' },
  { label: 'Ethiopia', value: '+251', flag: 'ET' },
  { label: 'Fiji', value: '+679', flag: 'FJ' },
  { label: 'Finland', value: '+358', flag: 'FI' },
  { label: 'France', value: '+33', flag: 'FR' },
  { label: 'Gabon', value: '+241', flag: 'GA' },
  { label: 'Gambia', value: '+220', flag: 'GM' },
  { label: 'Georgia', value: '+995', flag: 'GE' },
  { label: 'Germany', value: '+49', flag: 'DE' },
  { label: 'Ghana', value: '+233', flag: 'GH' },
  { label: 'Greece', value: '+30', flag: 'GR' },
  { label: 'Grenada', value: '+1-473', flag: 'GD' },
  { label: 'Guatemala', value: '+502', flag: 'GT' },
  { label: 'Guinea', value: '+224', flag: 'GN' },
  { label: 'Guinea-Bissau', value: '+245', flag: 'GW' },
  { label: 'Guyana', value: '+592', flag: 'GY' },
  { label: 'Haiti', value: '+509', flag: 'HT' },
  { label: 'Honduras', value: '+504', flag: 'HN' },
  { label: 'Hungary', value: '+36', flag: 'HU' },
  { label: 'Iceland', value: '+354', flag: 'IS' },
  { label: 'India', value: '+91', flag: 'IN' },
  { label: 'Indonesia', value: '+62', flag: 'ID' },
  { label: 'Iran', value: '+98', flag: 'IR' },
  { label: 'Iraq', value: '+964', flag: 'IQ' },
  { label: 'Ireland', value: '+353', flag: 'IE' },
  { label: 'Israel', value: '+972', flag: 'IL' },
  { label: 'Italy', value: '+39', flag: 'IT' },
  { label: 'Jamaica', value: '+1-876', flag: 'JM' },
  { label: 'Japan', value: '+81', flag: 'JP' },
  { label: 'Jordan', value: '+962', flag: 'JO' },
  { label: 'Kazakhstan', value: '+7', flag: 'KZ' },
  { label: 'Kenya', value: '+254', flag: 'KE' },
  { label: 'Kiribati', value: '+686', flag: 'KI' },
  { label: 'Kuwait', value: '+965', flag: 'KW' },
  { label: 'Kyrgyzstan', value: '+996', flag: 'KG' },
  { label: 'Laos', value: '+856', flag: 'LA' },
  { label: 'Latvia', value: '+371', flag: 'LV' },
  { label: 'Lebanon', value: '+961', flag: 'LB' },
  { label: 'Lesotho', value: '+266', flag: 'LS' },
  { label: 'Liberia', value: '+231', flag: 'LR' },
  { label: 'Libya', value: '+218', flag: 'LY' },
  { label: 'Liechtenstein', value: '+423', flag: 'LI' },
  { label: 'Lithuania', value: '+370', flag: 'LT' },
  { label: 'Luxembourg', value: '+352', flag: 'LU' },
  { label: 'Madagascar', value: '+261', flag: 'MG' },
  { label: 'Malawi', value: '+265', flag: 'MW' },
  { label: 'Malaysia', value: '+60', flag: 'MY' },
  { label: 'Maldives', value: '+960', flag: 'MV' },
  { label: 'Mali', value: '+223', flag: 'ML' },
  { label: 'Malta', value: '+356', flag: 'MT' },
  { label: 'Marshall Islands', value: '+692', flag: 'MH' },
  { label: 'Mauritania', value: '+222', flag: 'MR' },
  { label: 'Mauritius', value: '+230', flag: 'MU' },
  { label: 'Mexico', value: '+52', flag: 'MX' },
  { label: 'Micronesia', value: '+691', flag: 'FM' },
  { label: 'Moldova', value: '+373', flag: 'MD' },
  { label: 'Monaco', value: '+377', flag: 'MC' },
  { label: 'Mongolia', value: '+976', flag: 'MN' },
  { label: 'Montenegro', value: '+382', flag: 'ME' },
  { label: 'Morocco', value: '+212', flag: 'MA' },
  { label: 'Mozambique', value: '+258', flag: 'MZ' },
  { label: 'Myanmar', value: '+95', flag: 'MM' },
  { label: 'Namibia', value: '+264', flag: 'NA' },
  { label: 'Nauru', value: '+674', flag: 'NR' },
  { label: 'Nepal', value: '+977', flag: 'NP' },
  { label: 'Netherlands', value: '+31', flag: 'NL' },
  { label: 'New Zealand', value: '+64', flag: 'NZ' },
  { label: 'Nicaragua', value: '+505', flag: 'NI' },
  { label: 'Niger', value: '+227', flag: 'NE' },
  { label: 'Nigeria', value: '+234', flag: 'NG' },
  { label: 'North Macedonia', value: '+389', flag: 'MK' },
  { label: 'Norway', value: '+47', flag: 'NO' },
  { label: 'Oman', value: '+968', flag: 'OM' },
  { label: 'Pakistan', value: '+92', flag: 'PK' },
  { label: 'Palau', value: '+680', flag: 'PW' },
  { label: 'Palestine', value: '+970', flag: 'PS' },
  { label: 'Panama', value: '+507', flag: 'PA' },
  { label: 'Papua New Guinea', value: '+675', flag: 'PG' },
  { label: 'Paraguay', value: '+595', flag: 'PY' },
  { label: 'Peru', value: '+51', flag: 'PE' },
  { label: 'Philippines', value: '+63', flag: 'PH' },
  { label: 'Poland', value: '+48', flag: 'PL' },
  { label: 'Portugal', value: '+351', flag: 'PT' },
  { label: 'Qatar', value: '+974', flag: 'QA' },
  { label: 'Romania', value: '+40', flag: 'RO' },
  { label: 'Russia', value: '+7', flag: 'RU' },
  { label: 'Rwanda', value: '+250', flag: 'RW' },
  { label: 'Saint Kitts and Nevis', value: '+1-869', flag: 'KN' },
  { label: 'Saint Lucia', value: '+1-758', flag: 'LC' },
  { label: 'Saint Vincent and the Grenadines', value: '+1-784', flag: 'VC' },
  { label: 'Samoa', value: '+685', flag: 'WS' },
  { label: 'San Marino', value: '+378', flag: 'SM' },
  { label: 'Sao Tome and Principe', value: '+239', flag: 'ST' },
  { label: 'Saudi Arabia', value: '+966', flag: 'SA' },
  { label: 'Senegal', value: '+221', flag: 'SN' },
  { label: 'Serbia', value: '+381', flag: 'RS' },
  { label: 'Seychelles', value: '+248', flag: 'SC' },
  { label: 'Sierra Leone', value: '+232', flag: 'SL' },
  { label: 'Singapore', value: '+65', flag: 'SG' },
  { label: 'Slovakia', value: '+421', flag: 'SK' },
  { label: 'Slovenia', value: '+386', flag: 'SI' },
  { label: 'Solomon Islands', value: '+677', flag: 'SB' },
  { label: 'Somalia', value: '+252', flag: 'SO' },
  { label: 'South Africa', value: '+27', flag: 'ZA' },
  { label: 'South Korea', value: '+82', flag: 'KR' },
  { label: 'South Sudan', value: '+211', flag: 'SS' },
  { label: 'Spain', value: '+34', flag: 'ES' },
  { label: 'Sri Lanka', value: '+94', flag: 'LK' },
  { label: 'Sudan', value: '+249', flag: 'SD' },
  { label: 'Suriname', value: '+597', flag: 'SR' },
  { label: 'Sweden', value: '+46', flag: 'SE' },
  { label: 'Switzerland', value: '+41', flag: 'CH' },
  { label: 'Syria', value: '+963', flag: 'SY' },
  { label: 'Taiwan', value: '+886', flag: 'TW' },
  { label: 'Tajikistan', value: '+992', flag: 'TJ' },
  { label: 'Tanzania', value: '+255', flag: 'TZ' },
  { label: 'Thailand', value: '+66', flag: 'TH' },
  { label: 'Timor-Leste', value: '+670', flag: 'TL' },
  { label: 'Togo', value: '+228', flag: 'TG' },
  { label: 'Tonga', value: '+676', flag: 'TO' },
  { label: 'Trinidad and Tobago', value: '+1-868', flag: 'TT' },
  { label: 'Tunisia', value: '+216', flag: 'TN' },
  { label: 'Turkey', value: '+90', flag: 'TR' },
  { label: 'Turkmenistan', value: '+993', flag: 'TM' },
  { label: 'Tuvalu', value: '+688', flag: 'TV' },
  { label: 'Uganda', value: '+256', flag: 'UG' },
  { label: 'Ukraine', value: '+380', flag: 'UA' },
  { label: 'United Arab Emirates', value: '+971', flag: 'AE' },
  { label: 'United Kingdom', value: '+44', flag: 'GB' },
  { label: 'United States', value: '+1', flag: 'US' },
  { label: 'Uruguay', value: '+598', flag: 'UY' },
  { label: 'Uzbekistan', value: '+998', flag: 'UZ' },
  { label: 'Vanuatu', value: '+678', flag: 'VU' },
  { label: 'Vatican City', value: '+39', flag: 'VA' },
  { label: 'Venezuela', value: '+58', flag: 'VE' },
  { label: 'Vietnam', value: '+84', flag: 'VN' },
  { label: 'Yemen', value: '+967', flag: 'YE' },
  { label: 'Zambia', value: '+260', flag: 'ZM' },
  { label: 'Zimbabwe', value: '+263', flag: 'ZW' }
];

const EditStudentView = ({ formData, setFormData, setEmpty, empty, currentCourse, dateDurationChange, closeModal, saveAndASubmit, setUpdateAddress, setDefaultAddress, onOpen }) => {

  const [selectedDate, setSelectedDate] = useState(null);
  const { isLoggedIn } = useSelector((state) => state.auth)
  const [courseMode, setCourseMode] = useState('');
  const [activeSave, setActive] = useState(false)
  const navigate = useNavigate();

  const [formData2, setFormData2] = useState({
    name: '',
    lname: '',
    phone: '',
    email: '',
    address1: '',
    address2: '',
    country: '',
    state: '',
    city: '',
    pincode: '',
    gender: '',
  })

  const inputRefs = {
    name: useRef(null),
    lname: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    address1: useRef(null),
    pincode: useRef(null),
    gender: useRef(null),
  };


  const [values, setValues] = useState([])
  const countries = Country.getAllCountries()
  const [selectDate, setSetselectDate] = useState(null)
  const [Params] = useSearchParams()
  const [fixDate, setFixDate] = useState([]);
  const [validationErrors, setValidationErrors] = useState([]);
  const [isoCode, setIsoCode] = useState('');
  const phoneNumberFromRedux = useSelector((state) => state.auth.user?.data?.phoneNumber);
  const countryFromRedux = useSelector((state) => state.auth.user.data?.country);
  const stateFromRedux = useSelector((state) => state.auth.user.data?.state);
  const cityFromRedux = useSelector((state) => state.auth.user.data?.city);
  const genderFromRedux = useSelector((state) => state.auth.user.data?.gender);
  const emailFromRedux = useSelector((state) => state.auth.user.data?.email);
  const nationalityFromRedux = useSelector((state) => state.auth.user.data?.nationality);
  const dailCode = useSelector((state) => state.auth.user.data?.dialCode);
  const lastnameFromRedux = useSelector((state) => state.auth.user.data?.lastName);
  const addressLine1 = useSelector((state) => state.auth.user.data?.addressLine1);
  const addressLine2 = useSelector((state) => state.auth.user.data?.addressLine2);
  const pincodeFromRedux = useSelector((state) => state.auth.user.data?.pincode);
  const everything = useSelector((state) => state.auth.user.data);
  console.log('everything ', everything);
  console.log('phoneNumberFromRedux ', phoneNumberFromRedux);
  // console.log('countryFromRedux ', countryFromRedux);
  // console.log('stateFromRedux ', stateFromRedux);
  // console.log('cityFromRedux ', cityFromRedux);
  // console.log('genderFromRedux ', genderFromRedux);
  const [phoneValue, setPhoneValue] = useState(formData.phone);
  const [bold, setBold] = useState(0)
  const [open, setOpen] = useState(false);

  // const [empty, setEmpty] = useState(0)
  // const [isLoad, setIsLoad] = useState(false)
  const [disable, setDisable] = useState(false)

  const [isChecked, setIsChecked] = useState(true); // Checkbox is checked by default
  const [enableBtn, setEnableBtn] = useState(true)



  const [disData, setDisData] = useState('yes')
  const [isResidential, setIsResidential] = useState(false)
  const [isRegular, setIsRegular] = useState(false)
  const [autocomplete, setAutocomplete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false)
  const [editOpen, setEditOpen] = useState(false)

  const navigates = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();



  const [selectDateValue, setSelectDateValue] = useState(values.selectDate);
  const [setDate, setSetDate] = useState(false)
  const isSatsangPage = location.pathname === '/enrollment/satsang';

  const nameFromRedux = useSelector((state) => state.auth.user.data?.firstName);



  //   console.log("nameFromRedux from profile ", nameFromRedux);
  //   console.log("emailFromRedux from profile 22222 ", emailFromRedux);

  if (nameFromRedux === undefined) {
    dispatch(logoutUserAction());
    localStorage.removeItem("authorizationToken");
    navigates('/user/sign-in');
  }

  useEffect(() => {
    // Trigger the function to set `setEmpty` to 0
    onOpen();
  }, []);

  useEffect(() => {
    if (isSatsangPage) {
      setSetDate(true);
      setSelectDateValue({ label: 'No date Selected', value: 'No date Selected' });

      // Set formData with 'No date Selected' only once when the path is /enrollment/satsang
      setFormData((prev) => ({
        ...prev,
        sdate: 'No date Selected',
        courseDetails: {
          ...prev.courseDetails,
          date: 'No date Selected',
        },
      }));
    }
  }, [isSatsangPage]);

  useEffect(() => {
    const token = localStorage.getItem('authorizationToken'); // Check for the auth token
    if (!token) {
      // If the token is not found, navigate to the login page
      navigates('/user/sign-in');
    } else {
      setLoading(false); // If token is found, stop the loading state
    }
  }, [navigates]);





  useEffect(() => {
    if (phoneNumberFromRedux) {
      setPhoneValue(formData.phone);
      setPhoneValue(phoneNumberFromRedux);
    }
  }, [phoneNumberFromRedux]);

  useEffect(() => {
    if (countryFromRedux) {
      setFormData2((prev) => ({ ...prev, country: formData.country }));
      setValues((prev) => ({ ...prev, country: { label: countryFromRedux, value: countryFromRedux } }));
      const countryData = Country.getAllCountries().find(country => country.name === countryFromRedux)
      // console.log(countryData)
      setIsoCode(countryData.isoCode)
    }
    if (stateFromRedux) {
      setFormData2((prev) => ({ ...prev, state: formData.state }));
      setValues((prev) => ({ ...prev, state: { label: stateFromRedux, value: stateFromRedux } }));
    }
    if (cityFromRedux) {
      // console.log('cityFromRedux inside State ', cityFromRedux);
      setFormData2((prev) => ({ ...prev, city: formData.city }));
      setValues((prev) => ({ ...prev, city: { label: cityFromRedux, value: cityFromRedux } }));
    }


  }, [countryFromRedux, stateFromRedux, cityFromRedux, setFormData2, setValues]);

  const genderOptions = [
    { value: 'MALE', label: 'Male' },
    { value: 'FEMALE', label: 'Female' }
  ];

  useEffect(() => {
    if (genderFromRedux) {
      const upperCaseGender = genderFromRedux.toUpperCase();
      setFormData2((prev) => ({ ...prev, gender: formData.gender }));
    }
    if (nationalityFromRedux) {
      setFormData2((prev) => ({ ...prev, nationality: nationalityFromRedux }));
    }
    if (nameFromRedux) {
      // console.log('cityFromRedux inside State ', cityFromRedux);
      setFormData2((prev) => ({ ...prev, name: formData.name }));

    }
    if (emailFromRedux) {
      // console.log('cityFromRedux inside State ', cityFromRedux);
      setFormData2((prev) => ({ ...prev, email: formData.email }));

    }
    if (lastnameFromRedux) {
      // console.log('cityFromRedux inside State ', cityFromRedux);
      setFormData2((prev) => ({ ...prev, lname: formData.lname }));

    }
    if (addressLine1) {
      setFormData2((prev) => ({ ...prev, address1: formData.address1 }));
    }
    if (addressLine2) {
      setFormData2((prev) => ({ ...prev, address2: formData.address2 }));
    }
    if (pincodeFromRedux) {
      setFormData2((prev) => ({ ...prev, pincode: formData.pincode }));
    }
  }, [genderFromRedux, nationalityFromRedux, nameFromRedux, emailFromRedux, lastnameFromRedux, addressLine1, addressLine2, pincodeFromRedux, setFormData2]);

  useEffect(() => {
    if (cityFromRedux) {
      // Get all cities and find the one that matches the city in Redux
      //   console.log('cityFromRedux inside State ', cityFromRedux);
      const cities = City.getAllCities();
      const matchedCity = cities.find(city => city.name.toLowerCase() === cityFromRedux.toLowerCase());
      //   console.log('matched city ', matchedCity);

      if (matchedCity) {
        // Get state using stateCode and countryCode from matched city
        const matchedState = State.getStateByCodeAndCountry(matchedCity.stateCode, matchedCity.countryCode);
        // console.log('matched State ', matchedState.name);

        if (matchedState) {
          //   console.log('matched State ', matchedState.name); // Set the state name
          setFormData2((prev) => ({ ...prev, state: matchedState.name }));
          setValues((prev) => ({ ...prev, state: { label: matchedState.name, value: matchedState.name } }));
        } else {
          // setError('State not found for the given city');
        }
      } else {
        // setError('City not found');
      }
    }
  }, [cityFromRedux, setValues]);



  const handleResidential = (value) => {
    setIsResidential(value);
    localStorage.setItem('isResidential', value)
  }
  //   const navigate = useNavigate()

  const getUpdatedCountries = useMemo(() => {
    return Country.getAllCountries().map((country) => ({
      value: country.isoCode,
      label: country.name,
    }));
  }, []);

  // Function to handle when Autocomplete is loaded
  const onLoadAutocomplete = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  // Function to handle when a place is selected
  // const onPlaceChanged = () => {
  //   if (autocomplete) {
  //     const place = autocomplete.getPlace();
  //     console.log('Selected Place Object:', place); // Log the selected place object

  //     // Extract address components
  //     const address = place.formatted_address || '';
  //     console.log('Selected address Object:', address);
  //     const countryComponent = place.address_components?.find((component) =>
  //       component.types.includes('country')
  //     );
  //     const stateComponent = place.address_components?.find((component) =>
  //       component.types.includes('administrative_area_level_1')
  //     );
  //     const cityComponent = place.address_components?.find((component) =>
  //       component.types.includes('locality') || component.types.includes('sublocality')
  //     );
  //     const postalCodeComponent = place.address_components?.find((component) =>
  //       component.types.includes('postal_code')
  //     );

  //     // Extract values
  //     const country = countryComponent ? countryComponent.long_name : '';
  //     const state = stateComponent ? stateComponent.long_name : '';
  //     console.log("State select ", state);
  //     const city = cityComponent ? cityComponent.long_name : '';
  //     console.log("city select ", city);
  //     const pincode = postalCodeComponent ? postalCodeComponent.long_name : '';
  //     console.log("pincode select ", pincode);

  //     // Update formData with extracted values
  //     setFormData((prev) => ({ ...prev, address1: address, country, state, city, pincode }));
  //     setEmpty(address ? 0 : 4); // Set error if no address is found

  //     // Find and set the selected country in Select component
  //     const selectedCountry = getAllCountries.find((option) => option.label === country);
  //     setValues((prev) => ({ ...prev, country: selectedCountry }));


  //     console.log('Selected Country from Address:', selectedCountry); // Log the selected country
  //     console.log('State:', state, 'City:', city, 'Pincode:', pincode); // Log the state, city, and pincode
  //   }
  // };

  const onPlaceChanged = () => {
    if (autocomplete) {
      const place = autocomplete.getPlace();
      console.log(
        'place ', place
      )
      const address = place.formatted_address || '';
      console.log(
        'Address ', address
      )
      const nameComponent = place?.name;
      const countryComponent = place.address_components?.find((component) =>
        component.types.includes('country')
      );
      const stateComponent = place.address_components?.find((component) =>
        component.types.includes('administrative_area_level_1')
      );
      const cityComponent = place.address_components?.find((component) =>
        component.types.includes('locality')
      );
      const postalCodeComponent = place.address_components?.find((component) =>
        component.types.includes('postal_code')
      );
      const address2CodeComponent1 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_2')
      );
      const address2CodeComponent2 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_1')
      );
      const address1CodeComponent1 = place.address_components?.find((component) =>
        component.types.includes('street_number')
      );
      const address1CodeComponent2 = place.address_components?.find((component) =>
        component.types.includes('route')
      );
      const address1CodeComponent3 = place.address_components?.find((component) =>
        component.types.includes('sublocality_level_3')
      );


      const country = countryComponent ? countryComponent.long_name : '';
      const state = stateComponent ? stateComponent.long_name : '';
      const city = cityComponent ? cityComponent.long_name : '';
      const pincode = postalCodeComponent ? postalCodeComponent.long_name : '';
      const formattedAddress = place.formatted_address || '';
      const name = nameComponent ? nameComponent : '';

      // Split the formatted address into lines for Address 1 and Address 2
      const addressParts = formattedAddress.split(', ');

      // Set Address Line 1 and Address Line 2 based on your criteria
      let address1 = [
        name,
        address1CodeComponent1?.long_name || '',
        address1CodeComponent2?.long_name || '',
        address1CodeComponent3?.long_name || '',
      ]
        .filter(Boolean) // Filter out any empty strings
        .join(', '); // Join the components with a comma/ Address till required part

      let address2 = [
        address2CodeComponent1?.long_name || '',
        address2CodeComponent2?.long_name || '',
      ]
        .filter(Boolean) // Filter out any empty strings
        .join(', '); // Join the components with a comma


      if (!address1) {
        address1 = address2;
        address2 = ''; // Clear Address Line 2
      }


      console.log("Address 1 no tcoming ", address1)
      console.log("Address 2 no tcoming ", address2)

      // const addressData = {
      //   address1,
      //   address2,
      //   country,
      //   state,
      //   city,
      //   pincode,
      // };
  
      // localStorage.setItem('addressData', JSON.stringify(addressData));

      // setUpdateAddress(addressData);

      setFormData2((prev) => ({
        ...prev,
        address1: address1,
        address2: address2,
        country,
        state,
        city,
        pincode,
      }));
      setFormData((prev) => ({
        ...prev,
        address1: address1,
        address2: address2,
        country,
        state,
        city,
        pincode,
      }));
      setEmpty(address ? 0 : 4);

      const selectedCountry = getUpdatedCountries.find((option) => option.label === country);
      setValues({ country: selectedCountry, state: { label: state, value: state }, city: { label: city, value: city } });
    }
  };

  // Function to generate state options based on selected country
  const getUpdatedStates = (countryIsoCode) => {
    if (!countryIsoCode) return [];
    return State.getStatesOfCountry(countryIsoCode).map((state) => ({
      value: state.isoCode,
      label: state.name,
    }));
  };

  // Function to generate city options based on selected state
  const getUpdatedCities = (countryIsoCode, stateIsoCode) => {
    console.log(countryIsoCode, stateIsoCode);
    
    if (!countryIsoCode && !stateIsoCode) return [];
    return City.getCitiesOfState(countryIsoCode, stateIsoCode).map((city) => ({
      value: city.name,
      label: city.name,
    }));
  };



  const handleStartDate = (value) => {
    const day = value.getDate().toString().padStart(2, '0'); // Pad single digits with leading zero
    const month = (value.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = value.getFullYear();

    setValues((prev) => {
      return {
        ...prev, startDate: `${day}/${month}/${year}`
      }
    })
    setFormData2({ ...formData2, startDate: `${day}/${month}/${year}` })
    if (values.endDate) { createEndDate(`${day}/${month}/${year}`, values.endDate) }
  }

  const createEndDate = (startDate, value) => {
    // console.log(startDate, value);

    let endDate = formatDate(addMonths(parseDate(startDate ? startDate : values?.startDate), value?.value))
    setValues((prev) => {
      return {
        ...prev, endDate: value, endDateFormat: endDate
      }
    })
    localStorage.setItem('courseEndDate', endDate)
    setFormData2({ ...formData2, endDate: value, duration: value?.value })
    dateDurationChange(value?.value)
  }

  // Function to add months to a given date
  function addMonths(startDate, months) {
    const date = startDate; // Create a Date object from the start date
    // date.setMonth(date.getMonth() + months); // Add the number of months
    let totalDays = months * 30
    date.setDate(date.getDate() + (totalDays - 1));
    return date;
  }

  //   function formatDate(date) {
  //     const day = date.getDate().toString().padStart(2, '0'); // Day with leading zero
  //     const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Month with leading zero
  //     const year = date.getFullYear();
  //     return `${day}/${month}/${year}`;
  //   }
  function parseDate(dateStr) {
    const [day, month, year] = dateStr.split('/').map(Number); // Split the date string and convert parts to numbers
    // Create a new Date object (months are 0-based, so subtract 1 from month)
    return new Date(year, month - 1, day);
  }

  // const validatePhoneNumber = (phoneNumber) => {
  //   const errors = [];
  //   const parsedNumber = parsePhoneNumberFromString(phoneNumber);

  //   if (!parsedNumber) {
  //     errors.push('Invalid phone number format.');
  //     return errors;
  //   }

  //   // Format Validation
  //   const formatted = parsedNumber.formatInternational();
  //   const actualFormat = formatted.replace(/\s+/g, '');
  //   // console.log('format My : ',actualFormat);
  //   // console.log('phoneNumber My : ',phoneNumber);
  //   if (phoneNumber !== actualFormat) {
  //     errors.push(`Incorrect format. Should be ${formatted}`);
  //   }

  //   // Country Code Validation
  //   if (!parsedNumber.country) {
  //     errors.push('Invalid or missing country code.');
  //   }

  //   // Length Validation
  //   if (!isValidPhoneNumber(phoneNumber)) {
  //     errors.push('Phone number is not valid for the selected country.');
  //   }

  //   // National and International Numbering Validation
  //   if (!parsedNumber.isPossible()) {
  //     errors.push('Phone number is not possible.');
  //   }

  //   // Region-Specific Checks
  //   const areaCode = parsedNumber.nationalNumber.slice(0, 3); // Correctly access the national number
  //   // console.log('ac',areaCode);

  //   if (parsedNumber.country === 'US' && !['202', '212', '213'].includes(areaCode)) {
  //     errors.push('Invalid area code for the region.');
  //   }

  //   // Invalid Number Patterns
  //   if (/(\d)\1{6,}/.test(parsedNumber.nationalNumber)) {  // Use nationalNumber property directly
  //     errors.push('Phone number contains invalid patterns (e.g., too many repeated digits).');
  //   }

  //   return errors;
  // };

  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.id,
    ...country,
  }))

  // const handlePhoneChange = (value) => {
  //   setPhoneValue(value);
  //   setFormData({ ...formData, phone: value });

  //   if (value) {
  //     const errors = validatePhoneNumber(value);

  //     // console.log('ph', value, '', errors);
  //     console.log('phone err', validationErrors);
  //     setValidationErrors(errors);
  //   } else {
  //     setValidationErrors([]);
  //   }


  // };




  const handlePhoneChange = (value) => {
    console.log(value);

    setPhoneValue(value);
    setFormData2({ ...formData2, phone: value });

    if (value) {
      const errors = validatePhoneNumber(value);
      setValidationErrors(errors);
    } else {
      setValidationErrors([]);
    }
  };

  const validatePhoneNumber = (phoneNumber) => {
    let newphnNum = `${selectedCountryList.value}${phoneNumber}`;
    console.log(newphnNum);

    const errors = [];
    const parsedNumber = parsePhoneNumberFromString(newphnNum);

    if (!parsedNumber) {
      errors.push('Invalid phone number format.');
      return errors;
    }

    const areaCode = parsedNumber.nationalNumber.slice(0, 3); // Extract the area code
    let skip = 0;
    if (areaCode === '555') {
      // Skip additional checks for '555' area codes
      skip = 1;
    }

    // Check if it's a valid phone number for the selected country
    if (!isValidPhoneNumber(newphnNum) && skip === 0) {
      errors.push('Phone number is not valid for the selected country.');
    }



    // Additional custom validations can be added here
    if (parsedNumber && /(\d)\1{6,}/.test(parsedNumber.nationalNumber)) {
      errors.push('Phone number contains invalid patterns (e.g., too many repeated digits).');
    }



    return errors;
  };



  const handleCheckboxChange = () => {

    setIsChecked(prevChecked => {
      const newChecked = !prevChecked;
      setDisData('no');
      setFormData2({ ...formData2, terms: newChecked });
      return newChecked;
    });
  };
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const array = ["Yoga Classes for Men (Regular Asana) - On Campus",
      "Yoga Classes for Women (Regular Asana) - On Campus",
      "Yoga Asana Regular Classes - (Men & Women) - Online Yoga Classes",
      "Weekend Yoga Asana Classes - (Men & Women) - On Campus",
      "Weekend Yoga Asana Classes - (Men & Women) - Online",
      "Children's Yoga Classes (Regular) - On Campus",
      "Children's Weekend Yoga Class - On Campus",
      // "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      // "Regular Pregnancy Yoga Classes - Online & On Campus",
      // "Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
      // "Healing Yoga Movement & Rhythm - Online",
      //  "Yog Prayas - Online",
      // "Online Meditation Course  (Foundation Course)", 
      // "Regular Online Meditation Classes", 
      // "Couples’ Yoga Classes  - Online"
    ]
    const isMatch = array.includes(currentCourse?.title);
    setIsRegular(isMatch);
    localStorage.setItem('isRegular', isMatch)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow);
  }, [currentCourse])
  // useEffect(() => {

  //   // const array = ["Advanced Yoga Asana Regular Class - Online (Only for TYI Teachers)",
  //   //   "Asana Regular Classes for Women - On Campus", "Asana Regular Classes (Men & Women) - Online",
  //   //   "Weekend Asana Classes (Men & Women) - On Campus", "Weekend Asana Classes (Men & Women) - Online",
  //   //   "Children's Regular Classes - On Campus", "Children'&apos;'s Weekend Classes - On Campus",
  //   //   "Advanced Asana Regular Class - Online (Only for TYI Teachers)", "Yog Prayas - Online",
  //   //   "Online Meditation Course (Foundation Course)", "Regular Online Meditation Classes",
  //   //   "Healing Movement and Rhythm Classes", "Couples' Classes - Online",
  //   //   "IBY Class (Only for TYI TTC Teachers)", "Regular Pregnancy Yoga Class - Online & On Campus"
  //   // ];
  //   // const isMatch = array.includes(currentCourse?.title);
  //   // setIsRegular(isMatch)
  //   // console.log(currentCourse);

  //   // setSetselectDate(Params.get('date'))

  //   // window.scrollTo(0, 0)
  //   // console.log(pageDate?.key,'heoo')
  //   // {Params.get('date')===null? window.scrollTo(0, 0): document.getElementById('date-select').scrollIntoView()}
  // }, [isChecked])

  const updatedStates = (countryId) => {
    return State.getStatesOfCountry(countryId).map((state) => ({
      label: state.name,
      value: state.id,
      ...state,
    }))
  }

  const updatedCities = (countryId, stateId) => {
    // console.log(countryId,stateId,'stateId')
    return City.getCitiesOfState(countryId, stateId).map((city) => {
      // console.log(city,'city')
      return {
        label: city.name,
        value: city.id,
        ...city,
      }
    })
  }


  const selectStyles = {
    cursor: 'pointer',
    background: 'blue',
    borderColor: 'white',
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: '900',
    borderWidth: '0.1rem',
    borderRadius: '20px',
    borderStyle: 'solid',
    maxWidth: 'fit-content',
  }


  const testSubmit = (e) => {
    e.preventDefault();
    // console.log(formData);
  };


  const formattedDates = currentCourse?.dates?.map(date => ({
    label: date,
    value: date
  })) || [];
  const durationList = [{ label: '1 Month', value: 1 }, { label: '2 Months', value: 2 }, { label: '3 Months', value: 3 }, { label: '4 Months', value: 4 }, { label: '5 Months', value: 5 }, { label: '6 Months', value: 6 }, { label: '7 Months', value: 7 }, { label: '8 Months', value: 8 }, { label: '9 Months', value: 9 }, { label: '9 Months', value: 9 }, { label: '10 Months', value: 10 }, { label: '11 Months', value: 11 }, { label: '12 Months', value: 12 }]

  useEffect(() => {
    if (validationErrors?.length > 0) {
      setFormData2(prevState => ({ ...prevState, phone: '' })); // Clear phone value if errors are present
    } else {
      setFormData2(prevState => ({ ...prevState, phone: phoneValue })); // Update phone value if no errors
    }
  }, [validationErrors, phoneValue]);

  let tnc = {
    title: 'alumni-gallery',
    color: 'orange',
    menuColor: 'black',
    menuItems: []
  }

  const customStyles = {
    menu: (provided) => ({
      ...provided,
      maxHeight: 220, // Adjust the value to your desired max height
      overflowY: 'hidden', // Ensures scrolling is enabled if the content exceeds maxHeight
    }),
    control: (base, state) => ({
      ...base,
      background: 'white',
      borderRadius: '50px',
      width: '100%',
      padding: '0.25rem 2rem',
      marginTop: '2rem',
      marginLeft: '2rem',
      // Overwrittes the different states of border
      borderColor: state.isFocused
        ? 'rgba(96, 96, 96, 0.5019607843)'
        : 'rgba(96, 96, 96, 0.5019607843)',
      // Removes weird border around container
      boxShadow: state.isFocused ? null : null,
      '&:hover': {
        // Overwrittes the different states of border
        borderColor: state.isFocused
          ? 'rgba(96, 96, 96, 0.5019607843)'
          : 'rgba(96, 96, 96, 0.5019607843)',
      },
    }),
  }

  useEffect(() => {
    scrollTo(0, 0)
  }, [])

  // Function to remove ordinal suffixes and format the date
  const formatDate = (date) => {
    return date.replace(/\b(\d+)(th|nd|rd|st)\b/, '$1'); // Removes 'th', 'nd', 'rd', 'st'
  };

  // Handle the date selection
  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleEditSave = () => {
    console.log("formData 2 ", formData2)
    console.log('formData from Save ', formData)

    if (
      formData2.name === '' ||
      formData2.name === undefined ||
      formData2.name === null
    ) {
      // alert("1")

      setEmpty(1)

      const nameField = document.querySelector('[data-key="name"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }

    } else if (formData2.lname === '' ||
      formData2.lname === undefined ||
      formData2.lname === null) {
      setEmpty(7);
      const nameField = document.querySelector('[data-key="lname"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    } else if (formData2.email === '' || !validateEmail(formData2.email) || formData2.email === undefined ||
      formData2.email === null) {
      // alert("2")
      setEmpty(2)
      const nameField = document.querySelector('[data-key="email"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    } else if (
      formData2.phone === '' ||
      formData2.phone?.length < 6 ||
      formData2.phone?.length > 15 ||
      formData2.phone === undefined
    ) {
      // alert("3")
      setEmpty(3)
      const nameField = document.querySelector('[data-key="phone"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    } else if (formData2.address1 === '') {
      // alert("4")
      setEmpty(4)
      const nameField = document.querySelector('[data-key="address1"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    }
    else if (formData2.country === '') {
      // alert("5")
      setEmpty(5)
      const nameField = document.querySelector('[data-key="country"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    }
    else if (formData2.pincode === '') {
      // alert("6")
      setEmpty(8)
      const nameField = document.querySelector('[data-key="pincode"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    } else if (formData2.gender === '') {
      // alert("7")
      setEmpty(11)
      const nameField = document.querySelector('[data-key="gender"]');
      console.log(" nameField ", nameField);
      if (nameField) {
        nameField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        nameField.focus();
      }
    }
    else {
      // Update formData2 and formData with the same values
      setFormData2((prev) => ({
        ...prev,
        ...formData2, // Already contains the updated values
        phone: phoneValue
      }));

      setFormData(prevFormData => ({
        ...prevFormData,
        ...formData2
      }));
      localStorage.setItem('addressDataNew', JSON.stringify({
        address1: formData2?.address1,
        pincode: formData2?.pincode
  
      }));

      setDefaultAddress(true);
      saveAndASubmit()
      closeModal();
    }

    // Update formData with the values from formData2, keeping the existing values


    console.log('formData from Save after updating ', formData)

  }
  const [isCountryContainer, SetIsCountryContainer] = useState(false);
  const [selectedCountryList, SetSelectedCountryList] = useState({ label: 'India', value: '+91', flag: 'IN' })
  const listRef = useRef(null);

  const scrollToLetter = (letter) => {
    const index = countriesMap.findIndex(country => country.label.startsWith(letter));
    if (index !== -1 && listRef.current) {
      console.log(listRef)
      const element = listRef.current.children[index];
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event?.key) {
        scrollToLetter(event.key.toUpperCase());
      }
    };
    // Attach the event listener
    window.addEventListener('keydown', handleKeyDown);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  const handleCountryChange = (mobile, country) => {
    console.log(mobile, country);

    setPhoneValue(`${country.value}${mobile}`);
    // setPhoneNumber({ dialCode: country.value, mobile: mobile })

  };

  // Handle enrollment button click
  //    const handleEnrollClick = () => {
  //     const dateToPass = selectedDate ? selectedDate : 'null';
  //     isLoggedIn ? navigate(`/enrollment/${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`) : navigate(`/user/sign-in/?location=${pageDate.key}/?date=${encodeURIComponent(dateToPass)}`);
  //   };



  // let termsAndCondition =
  //   'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only ve centuries, but also the leap into elec- tronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
  return (
    <>
      <div className='terms-container'>
        {/* <InnerNavComponent abc={tnc} /> */}
        {/* <div className='banner-heading' style={{ textAlign: 'left', margin: '0px' }}>
            Upcoming Dates
     
        </div> */}
      </div>

      <form className='edit_popup' onClick={() => SetIsCountryContainer(false)}>
        <div className='inp-group'>
          <div className='inp-label'>First Name <span>*</span></div>
          <div className="form_error">

            <InputComponent
              type="text"
              placeholder="First Name*"
              form={formData2}
              setField={setFormData2}
              onChange={(e) => {
                setEnableBtn(false)
              }}
              keyName="name"
              dataKey="name"
              errorCheck={setEmpty}
            />
            {empty === 1 && <small class="name_err" style={{ position: 'absolute', right: '0', color: 'red' }}> Please enter your first name</small>}
          </div>
        </div>

        <div className='inp-group'>
          <div className='inp-label'>Last Name <span>*</span></div>
          <div className="form_error">

            <InputComponent
              type="text"
              placeholder="Last Name*"
              form={formData2}
              setField={setFormData2}
              keyName="lname"
              dataKey="lname"
              errorCheck={setEmpty}
            />
            {empty === 7 && <small class="name_err" style={{ position: 'absolute', right: '0', color: 'red' }}> Please enter your last name</small>}
          </div>
        </div>

        <div className='inp-group'>
          <div className='inp-label'>Mobile Number <span>*</span></div>
          <div>
            {/*  className="form_error phone_inp_fixes" */}
            {/* <PhoneInput
              placeholder="Enter phone number*"
              defaultCountry="IN"
              value={phoneValue}
              dataKey="phone"
              onChange={handlePhoneChange}
            /> */}
            <div class="input-container">
              <div class="prefix-dropdown"
                onClick={(event) => { event.stopPropagation(); SetIsCountryContainer(true); }}
              ><span>
                  <img width='20px' style={{ borderRadius: '2px', marginRight: '6px' }} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${selectedCountryList.flag.toUpperCase()}.svg`} alt="" /></span>
                {selectedCountryList.value}
                < span style={{ marginLeft: '4px' }}>
                  <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.06 0.726562L4 3.7799L0.94 0.726562L0 1.66656L4 5.66656L8 1.66656L7.06 0.726562Z" fill="black" />
                  </svg>
                </span >
              </div >
              <input type="number" class="input-box" placeholder="Enter phone number" value={phoneValue}
                onChange={(e) => { handlePhoneChange(e.target.value) }}
              />
            </div >
            {isCountryContainer &&
              <div className='ctry-dpdwn' ref={listRef}>
                {countriesMap.map(country => (
                  <div key={country.label} className='ctr-option' onClick={() => { SetSelectedCountryList(country), SetIsCountryContainer(false), handleCountryChange(phoneValue, country) }}>
                    <span><img width='20px' style={{ borderRadius: '2px' }} src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${country.flag.toUpperCase()}.svg`} alt="" /></span>
                    <span style={{ padding: '0 6px 0 6px' }}>
                      {country.label}</span> <span style={{ color: 'rgba(0, 0, 0, 0.5)' }}>{country.value}</span></div>
                ))}
              </div>}
            {validationErrors?.length > 0 ? (
              <div className="created_phone_err" style={{ position: 'absolute', right: '0', bottom: '-8px' }}>Invalid Number</div>
            ) : (empty === 3 && (!formData2.phone || (formData2.phone === '')) ? (
              <small className="phone_error" style={{ position: 'absolute', right: '0', bottom: '-12px', color: 'red' }}>Please enter a valid phone number</small>
            ) : " ")}
            {/* {console.log('ve', validationErrors)} */}

          </div>
        </div>

        <div className='inp-group'>
          <div className='inp-label'>Email Address <span>*</span></div>
          <div className="form_error">
            <InputComponent
              // type="email"
              id="text"
              placeholder="Email ID*"
              form={formData2}
              setField={setFormData2}
              keyName="email"
              dataKey="email"
              errorCheck={setEmpty}
            />
            {empty === 2 && <small class="name_err" style={{ position: 'absolute', right: '0', color: 'red' }}> Please enter a valid email</small>}




          </div>
        </div>




        {/* Adding start google API 2 */}


        <div className='karo'></div>
        <LoadScript googleMapsApiKey={mapKey} libraries={libraries}>
          <div className='inp-group address_1_fixes'>
            <Autocomplete onLoad={onLoadAutocomplete} onPlaceChanged={onPlaceChanged}>

              <>
                <div className='inp-label'>Address Line 1*</div>
                <div className="form_error">
                  <InputComponent
                    type="text"
                    placeholder="Address Line 1*"
                    form={formData2}
                    setField={setFormData2}
                    keyName="address1"
                    dataKey="address1"
                    errorCheck={setEmpty}
                  />
                  {empty === 4 && <p style={{ position: 'absolute', right: '0', color: 'red', fontSize: '10px', bottom: '-15px' }}>Please enter your address</p>}
                </div>
              </>

            </Autocomplete>
          </div>
        </LoadScript>
        <div className='inp-group'>
          <div className='inp-label'>House No. & Street name<span>*</span></div>
          <div className="form_error">

            <InputComponent
              type="text"
              placeholder="House No. & Street name"
              form={formData2}
              setField={setFormData2}
              keyName="address2"
              errorCheck={setEmpty}
            />
          </div>
        </div>




        <div className='inp-group'>
          <div className='inp-label'>Country<span>*</span></div>
          <div className="form_error countries_list">
            <Select
              styles={customStyles}
              id="country"
              name="country"
              placeholder="Country"
              options={getUpdatedCountries}
              value={values.country}
              dataKey="country"
              onChange={(value) => {
                setValues({ country: value, state: null, city: null });
                setFormData2((prev) => ({ ...prev, country: value.label }));
              }}
            />
            {empty === 5 && <p>Please enter your country</p>}
          </div>
        </div>

        <div className='inp-group'>
          <div className='inp-label'>State<span>*</span></div>
          <div className="form_error">
            <Select
              styles={customStyles}
              id="state"
              name="state"
              placeholder="State"
              options={getUpdatedStates(values?.country?.isoCode ? values?.country?.isoCode :
                values?.country?.value)}
              value={values.state}
              onChange={(value) => {
                setValues({ ...values, state: value, city: null });
                setFormData2((prev) => ({ ...prev, state: value.label }));
              }}
            />
          </div>
        </div>


        <div className='inp-group'>
          <div className='inp-label'>City<span>*</span></div>
          <div className="form_error">

            <Select
              styles={customStyles}
              id="city"
              name="city"
              placeholder="City"
              options={getUpdatedCities(values?.country?.isoCode ? values?.country?.isoCode :
                values?.country?.value, values?.state?.value)}
              value={values.city}
              onChange={(value) => {
                setValues({ ...values, city: value });
                setFormData2((prev) => ({ ...prev, city: value.label }));
              }}
            />
          </div>
        </div>


        <div className='inp-group'>
          <div className='inp-label'>Pincode<span>*</span></div>
          <div className="form_error pincode_err">
            <InputComponent
              type="text"
              placeholder="Pincode*"
              form={formData2}
              setField={setFormData2}
              dataKey="pincode"
              keyName="pincode"
              errorCheck={setEmpty}
            />
            {empty === 8 && <small style={{ position: 'absolute', right: '0', bottom: '-18px', color: 'red' }}>Please enter your pincode</small>}
          </div>
        </div>



        {/* End google API 2 */}

        {/* <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 1*"
                form={formData}
                setField={setFormData}
                keyName="address1"
                errorCheck={setEmpty}
              />
              {empty === 4 && <p> Please enter your address</p>}
            </div> */}
        {/* <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Address Line 2"
                form={formData}
                setField={setFormData}
                keyName="address2"
                errorCheck={setEmpty}
              />
            </div> */}
        {/* <div className="form_error countries_list">
              <Select
                styles={customStyles}
                id="country"
                name="country"
                placeholder="Country"
                label="country"
                className="select"
                form={formData}
                setField={setFormData}
                keyName="country"
                errorCheck={setEmpty}
                options={updatedCountries}
                value={values.country}
                onChange={(value) => {
                  setValues({ country: value, state: null, city: null }, false)
                  setFormData((prev) => {
                    return { ...prev, country: value.name }
                  })
                }}
              />
              {empty === 5 && <p>Please enter your country</p>}
            </div> */}
        {/* <div className="form_error">
              <Select
                styles={customStyles}
                id="state"
                name="state"
                placeholder="State"
                form={formData}
                setField={setFormData}
                keyName="state"
                errorCheck={setEmpty}
                options={updatedStates(values.country?.isoCode)}
                value={values.state}
                onChange={(value) => {
                  setValues(
                    { country: values.country, state: value, city: null },
                    false
                  )
                  setFormData((prev) => {
                    return { ...prev, state: value.name }
                  })
                }}
              />

            </div> */}
        {/* <div className="form_error">
              <Select
                styles={customStyles}
                id="city"
                name="city"
                placeholder="City"
                form={formData}
                setField={setFormData}
                keyName="city"
                errorCheck={setEmpty}
                options={updatedCities(
                  values?.country?.isoCode,
                  values?.state?.isoCode
                )}
                value={values.city}
                onChange={(value) => {
                  setValues(
                    {
                      country: values.country,
                      state: values.state,
                      city: value,
                    },
                    false
                  )
                  setFormData((prev) => {
                    return { ...prev, city: value.name }
                  })
                }}
              />
              {empty === 7 && (
                <small >
                  {' '}
                  Please enter your city
                </small>
              )}
            </div> */}
        {/* <div className="form_error pincode_err">
              <InputComponent
                type="text"
                placeholder="Pincode*"
                form={formData}
                setField={setFormData}
                keyName="pincode"
                errorCheck={setEmpty}
              />
              {empty === 8 && <small> Please enter your pincode</small>}
            </div> */}

        {/* <div className="form_error">
            <div className="course-card-dropdown">
          <div >
           
          <SelectDropDown
                  currentValue={selectDate}
                  changeCurrentValue={setSetselectDate}
                  text={'Select Date/Time'}
                  isStyles={selectStyles}
                  dates={currentCourse.dates}
                  keyName="sdate"
                  form={formData}
                  setFormData={setFormData}
                  value={values.selectDate}
                  onChange={(value) => {
                    setValues({ ...values, sdate: value })
                    setFormData((prev) => ({
                      ...prev,
                      sdate: value.keyName
                  }))
                  }}
          />
         
          </div>
          </div>
          </div> */}

        <div className="personal_gender inp-group">
          <span className="gender-text inp-label">Gender*</span>
          <div className="gender form_error">
            <Select
              styles={customStyles}  // Define any custom styles if needed
              id="gender"
              name="gender"
              dataKey="gender"
              placeholder="Select Gender"
              options={genderOptions}
              value={genderOptions.find(option => option.value === formData2.gender)}
              onChange={(selectedOption) => {
                setFormData2(prev => ({ ...prev, gender: selectedOption.value }));
                setEmpty(0);
              }}
            />
          </div>
          {empty === 11 && (
            <div style={{ marginTop: '0.5rem', fontSize: '12px', color: 'red' }}>
              Please select one option
            </div>
          )}
        </div>

        {/* <div className="personal_gender inp-group">
  <span className="gender-text inp-label">Gender*</span>
  <div className="gender form_error">
    <select
      className="gender_select"
      value={formData2.gender}
      onChange={(e) => {
        setFormData2({ ...formData2, gender: e.target.value });
        setEmpty(0);
      }}
    >
      <option value="" disabled>
        Select Gender
      </option>
      <option value="MALE">Male</option>
      <option value="FEMALE">Female</option>
    </select>
  </div>
  {empty === 11 && (
    <div style={{ marginTop: '0.5rem', fontSize: '12px', color: 'red' }}>
      Please select one option
    </div>
  )}
</div> */}



        {/* <div className="personal_gender">
              <span className="gender-text">Gender*</span>
              <div className="gender form_error">
                <label className="gender_radio">
                  Male&nbsp;
                  <input
                    type="radio"
                    value="MALE"
                    name="gender"
                    checked={formData2.gender === 'MALE'}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData2({ ...formData2, gender: e.target.value })
                        setEmpty(0)
                      }
                    }}
                  />
                </label>
                <label className="gender_radio">
                  Female&nbsp;
                  <input
                    className="radio"
                    type="radio"
                    value="FEMALE"
                    name="gender"
                    checked={formData2.gender === 'FEMALE'}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setFormData2(
                          { ...formData2, gender: e.target.value },
                          setEmpty(0)
                        )
                      }
                    }}
                  />
                </label>

              </div>
              {empty === 11 && <div style={{ marginTop: '-11rem', fontSize: '12px', float: 'right', display: 'inline-block', color: 'red' }}> Please select one option</div>}
            </div> */}

        {/* 
            { !isSatsangPage && (
              <div className="form_error course_date">
              <Select
                styles={customStyles}
                id="sdate"
                name="sdate"
                placeholder="Select Date/Time*"
                form={formData}
                setField={setFormData}
                keyName="sdate"
                errorCheck={setEmpty}
                isSearchable={false}
                options={formattedDates}
                value={setDate ? selectDateValue : values.selectDate}
                onChange={(value) => {
                  setValues(
                    { country: values.country, state: values.state, city: values.city, sdate: value },
                    false
                  )
                  setFormData((prev) => {
                    return {
                      ...prev, sdate: value.value, courseDetails: {
                        ...prev.courseDetails,
                        date: value.value
                      }
                    }
                  })
                }}
              />
              {empty === 18 && <small id="fill_err"> Please select course date</small>}
            </div>
            )}

            {isRegular && <><br /><div className="form_error course_date date-input-wrapper">
              <DatePicker
                minDate={minDate}
                visiblity={'hidden'}
                placeholderText="Select start date*" // Custom placeholder text
                dateFormat="dd/MM/YYYY"
                value={values.startDate}
                form={formData}
                setField={setFormData}
                onChange={(value) => {
                  handleStartDate(value)
                }}
                onKeyDown={(e) => e.preventDefault()} //
              // readOnly
              />
              {empty === 21 && <small id="fill_err"> Please select start date</small>
              }
            </div></>}

            {isRegular && <>
              <div className="form_error course_date">
                <Select
                  styles={customStyles}
                  id="endDate"
                  name="endDate"
                  placeholder="Select Duration*"
                  // form={formData}
                  // setField={setFormData}
                  // keyName="endDate"
                  // // errorCheck={setEmpty}
                  options={durationList}
                  value={values.endDate}
                  onChange={(value) => {
                    createEndDate('', value)
                  }}
                />
                {empty === 20 && <small id="fill_err"> Please select duration</small>}
              </div>
              <div style={{ padding: '10px 0 0 26px', color: '#C9705F', fontWeight: '600' }}>&#8377;2200 off for 12 months</div>
            </>}




           <div className="DOB_box form_error">
              <InputComponent
                type="number"
                placeholder="Age"
                minnum="4"
                maxnum="99"
                form={formData}
                setField={setFormData}
                keyName="AGE"
                errorCheck={setEmpty}
              />
              {empty === 9 && <div style={{ marginTop: '-8.2rem', display: 'inline-block', float: 'right', fontSize: '12px', color: 'red'}}> Please enter age between 4 & 100</div>}
            </div> 
             <div className="form_error">
              <InputComponent
                type="text"
                placeholder="Nationality"
                form={formData}
                setField={setFormData}
                keyName="nationality"
                errorCheck={setEmpty}
              />
              {empty === 10 && <div style={{ marginTop: '-8rem', display: 'inline-block', float: 'right', fontSize: '12px', color: 'red'}}> Please enter your nationality</div>}
            </div>  */}
        <Other
          // setBold={setBold}
          empty={empty}
          formData={formData2}
          setFormData={setFormData2}
        // handleEmpty4={handleEmpty4}
        />

      </form>

      <div className='date_enroll_btn'>
        <button className={!enableBtn ? 'date_enroll_btn_txt before_date_select' : 'date_enroll_btn_txt after_date_select'} disabled={!enableBtn} onClick={() => { handleEditSave() }}>Save Changes</button>
      </div>
    </>
  )
}

export default EditStudentView
