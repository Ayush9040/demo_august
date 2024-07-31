// import Resizer from 'react-image-file-resizer'
import OSS from 'ali-oss'

import { getSecureStsCred,regenerateSecureStsToken } from './Course.Api'

const getOssClient = ({
  securityToken,
  accessKeyId,
  accessKeySecret,
  ossBucketName,
  ossBucketRegion,
}) => {
  const client = new OSS({
    region: ossBucketRegion,
    accessKeyId,
    accessKeySecret,
    stsToken: securityToken,
    bucket: ossBucketName,
    // Refresh the temporary access credential.
    refreshSTSToken: async() => {
      const { data } = await regenerateSecureStsToken()
      return {
        accessKeyId: data.data.accessKeyId,
        accessKeySecret: data.data.accessKeySecret,
        stsToken: data.data.securityToken,
      }
    },
  })

  return client
}

// const resizeFile = (file) =>
//   new Promise((resolve, reject) => {
//     Resizer.imageFileResizer(
//       file,
//       500,
//       500,
//       'JPEG',
//       70,
//       0,
//       (uri) => {
//         resolve(uri)
//       },
//       'file'
//     )
//   })

// export const getAudioDuration = (file) =>
//   new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.onload = (e) => {
//       const audioContext = new (window.AudioContext ||
//         window.webkitAudioContext)()
//       audioContext.decodeAudioData(e.target.result, (buffer) => {
//         const duration = Math.floor(buffer.duration)
//         resolve(duration)
//       })
//     }
//     reader.onerror = (event) => {
//       reject('Error while getting audio')
//     }
//     reader.readAsArrayBuffer(file)
//   })

// export const formatForReactSelect = (tagsArray) => {
//   const formatedData = tagsArray.map(({ name, _id }) => ({
//     label: name,
//     value: _id,
//     key: _id,
//   }))
//   return formatedData
// }

// export const filterTagsAndFormat = (tags = []) => {
//   const tagsData = formatForReactSelect(
//     tags.filter(({ objectType }) => objectType === 'TAG')
//   )
//   const categoryData = formatForReactSelect(
//     tags.filter(({ objectType }) => objectType === 'CATEGORY')
//   )
//   const subCategoryData = formatForReactSelect(
//     tags.filter(({ objectType }) => objectType === 'SUBCATEGORY')
//   )
//   return {
//     tagsData,
//     categoryData,
//     subCategoryData,
//   }
// }

// export const formatForRecommendationSelect = (userDataArray) => {
//   const userformatedData = userDataArray.map(({ label, _id }) => ({
//     label: label,
//     value: label,
//     key: _id,
//   }))
//   return userformatedData
// }



export const formatMultiSelectData = (data) => {
  const formatedData = data.map(({ value }) => value)
  return formatedData
}

// AUDIO_IMAGE
export const uploadFile = (file, type) =>
  new Promise(async(resolve, reject) => {
    try {
      let uploadFile = file
      // if (file.type.includes('image')) {
      //   if (file.size < 50000) {} else uploadFile = await resizeFile(file)
      // }
      const { data } = await getSecureStsCred({
        name: uploadFile.name,
        type,
      })

      const client = getOssClient(data.data)
      // const { url } = await client.put(data.data.fileLocation, uploadFile) // example for simple upload

      const { name, bucket } = await client.multipartUpload(
        data.data.fileLocation,
        uploadFile,
        // {
        //   progress: (p) => {
        //     onProgress(p * percentageW)
        //   },
        //   partSize: 1024 * 1024 * 1, // this will create a 1MB chunk of file
        //   parallel: 3,
        // }
      )
      resolve(
        `https://${bucket}.${data.data.ossBucketRegion}.amazonaws.com/${name}`
      )
    } catch (error) {
      reject({
        error: true,
        errorMessage: 'Unable to upload data try again later',
      })
    }
  })

// export const formatArray = (arr) => {
//   let updatedArray = []
//   for (let i in arr) {
//     updatedArray.push({ key: arr[i], label: arr[i], value: arr[i] })
//   }
//   return updatedArray
// }
