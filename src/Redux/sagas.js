import { all } from 'redux-saga/effects'
import { authSagas } from '../Views/StaticSite/Views/Authentication/Auth.watchers'
import { blogsSaga } from '../Views/StaticSite/Views/Blogs/Blogs.watchers'
import { careerSaga } from '../Views/StaticSite/Views/Careers/Career.watchers'
import { donationSagas } from '../Views/StaticSite/Views/Donation/Donation.watchers'
import { volunteerSagas } from '../Views/StaticSite/Views/Volunteer/Volunteer.watchers'

export default function* rootSaga() {
  yield all([authSagas(),volunteerSagas(),careerSaga(),donationSagas(),blogsSaga()])

}
