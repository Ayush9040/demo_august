import DonationPage from '../Views/donation-page'
import SingleDonation from '../Views/single-donation'

const donationRoutes = [
  {
    Component: DonationPage,
    path: '/',
    exact: true,
    id: 'statisSiteDonationPage',
    routePath: '/',
    name: 'DonationPage',
  },
  {
    Component: SingleDonation,
    path: '/donate/:donationId',
    exact: true,
    id: 'statisSiteUnderSingleDonation',
    routePath: '/donate/:donationId',
    name: 'SingleDonation',
  },
]

export default donationRoutes