// // import Resizer from 'react-image-file-resizer'
// import OSS from 'ali-oss'

// import { getSecureStsCred,regenerateSecureStsToken } from './Oss.Api'

// const getOssClient = ({
//   securityToken,
//   accessKeyId,
//   accessKeySecret,
//   ossBucketName,
//   ossBucketRegion,
// }) => {
//   const client = new OSS({
//     region: ossBucketRegion,
//     accessKeyId,
//     accessKeySecret,
//     stsToken: securityToken,
//     bucket: ossBucketName,
//     // Refresh the temporary access credential.
//     refreshSTSToken: async() => {
//       const { data } = await regenerateSecureStsToken()
//       return {
//         accessKeyId: data.data.accessKeyId,
//         accessKeySecret: data.data.accessKeySecret,
//         stsToken: data.data.securityToken,
//       }
//     },
//   })

//   return client
// }

// // const resizeFile = (file) =>
// //   new Promise((resolve, reject) => {
// //     Resizer.imageFileResizer(
// //       file,
// //       500,
// //       500,
// //       'JPEG',
// //       70,
// //       0,
// //       (uri) => {
// //         resolve(uri)
// //       },
// //       'file'
// //     )
// //   })

// // export const getAudioDuration = (file) =>
// //   new Promise((resolve, reject) => {
// //     const reader = new FileReader()
// //     reader.onload = (e) => {
// //       const audioContext = new (window.AudioContext ||
// //         window.webkitAudioContext)()
// //       audioContext.decodeAudioData(e.target.result, (buffer) => {
// //         const duration = Math.floor(buffer.duration)
// //         resolve(duration)
// //       })
// //     }
// //     reader.onerror = (event) => {
// //       reject('Error while getting audio')
// //     }
// //     reader.readAsArrayBuffer(file)
// //   })

// // export const formatForReactSelect = (tagsArray) => {
// //   const formatedData = tagsArray.map(({ name, _id }) => ({
// //     label: name,
// //     value: _id,
// //     key: _id,
// //   }))
// //   return formatedData
// // }

// // export const filterTagsAndFormat = (tags = []) => {
// //   const tagsData = formatForReactSelect(
// //     tags.filter(({ objectType }) => objectType === 'TAG')
// //   )
// //   const categoryData = formatForReactSelect(
// //     tags.filter(({ objectType }) => objectType === 'CATEGORY')
// //   )
// //   const subCategoryData = formatForReactSelect(
// //     tags.filter(({ objectType }) => objectType === 'SUBCATEGORY')
// //   )
// //   return {
// //     tagsData,
// //     categoryData,
// //     subCategoryData,
// //   }
// // }

// // export const formatForRecommendationSelect = (userDataArray) => {
// //   const userformatedData = userDataArray.map(({ label, _id }) => ({
// //     label: label,
// //     value: label,
// //     key: _id,
// //   }))
// //   return userformatedData
// // }



// export const formatMultiSelectData = (data) => {
//   const formatedData = data.map(({ value }) => value)
//   return formatedData
// }

// // AUDIO_IMAGE
// export const uploadFile = (file, type) =>
//   new Promise(async(resolve, reject) => {
//     try {
//       let uploadFile = file
//       // if (file.type.includes('image')) {
//       //   if (file.size < 50000) {} else uploadFile = await resizeFile(file)
//       // }
//       const { data } = await getSecureStsCred({
//         name: uploadFile.name,
//         type,
//       })

//       const client = getOssClient(data.data)
//       // const { url } = await client.put(data.data.fileLocation, uploadFile) // example for simple upload

//       const { name, bucket } = await client.multipartUpload(
//         data.data.fileLocation,
//         uploadFile,
//         // {
//         //   progress: (p) => {
//         //     onProgress(p * percentageW)
//         //   },
//         //   partSize: 1024 * 1024 * 1, // this will create a 1MB chunk of file
//         //   parallel: 3,
//         // }
//       )
//       resolve(
//         `https://${bucket}.${data.data.ossBucketRegion}.amazonaws.com/${name}`
//       )
//     } catch (error) {
//       console.log(error,'err')
//       reject({
//         error: true,
//         errorMessage: 'Unable to upload data try again later',
//       })
//     }
//   })

// // export const formatArray = (arr) => {
// //   let updatedArray = []
// //   for (let i in arr) {
// //     updatedArray.push({ key: arr[i], label: arr[i], value: arr[i] })
// //   }
// //   return updatedArray
// // }

import AWS from 'aws-sdk';
import { getSecureStsCred, uploadFileS3 } from './Oss.Api';

// Create an S3 client
// const getS3Client = ({
//   accessKeyId,
//   accessKeySecret,
//   securityToken,  // AWS STS token
//   ossBucketRegion,  // S3 bucket region
//   sessionToken,
//   ossBucketName
// }) => {
//   AWS.config.update({
//     accessKeyId: accessKeyId,
//     secretAccessKey: accessKeySecret,
//   });
//   const s3 = new AWS.S3({
//     params: { Bucket: ossBucketName },
//     region: ossBucketRegion,
//     // accessKeyId,
//     // secretAccessKey: accessKeySecret,
//     // sessionToken: securityToken,  // AWS STS token
//     // region: ossBucketRegion  // S3 bucket region
//   });

//   console.log('S3 Client initialized with:', {
//     accessKeyId,
//     accessKeySecret,
//     sessionToken,
//     ossBucketRegion,
//     securityToken,
//     ossBucketName
//   });

//   return s3;
// };

// // Formats data similarly to before
// export const formatMultiSelectData = (data) => {
//   return data.map(({ value }) => value);
// };


// Function to convert image file to Base64
// const convertToBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();

//     reader.onloadend = () => {
//       // The result is a data URL (Base64 string with MIME type)
//       const base64String = reader.result.split(',')[1]; // Extract Base64 part
//       resolve(base64String);
//     };

//     reader.onerror = () => {
//       reject(new Error('Error reading file'));
//     };

//     // Read the file as a data URL
//     reader.readAsDataURL(file);
//   });
// };

// Upload file to S3
export const uploadFile = (file, type) =>
  new Promise(async (resolve, reject) => {
    try {
      console.log(file, type);
      let payload = new FormData();
      payload.append('name', file.name)
      payload.append('type', type)
      payload.append('contentType', file.type)
      payload.append('file', file)
      // let payload = { name: file.name, type: type, contentType: file.type, image: await convertToBase64(file) }
      // let uploadFile = file;
      // console.log(payload);
      await uploadFileS3(payload).then(res => {
        resolve(res?.data.url);
      }).catch(err => {
        reject({
          error: true,
          errorMessage: 'Unable to upload data, try again later',
        });
      })
      // const { data } = await getSecureStsCred({
      //   name: uploadFile.name,
      //   type,
      // });

      // console.log('Received credentials:', data.data);

      // const s3Client = getS3Client(data.data);
      // console.log(s3Client)
      // const params = {
      //   Bucket: data.data.ossBucketName,
      //   Key: data.data.fileLocation, // File path in S3 uploadFile.name// data.data.fileLocation
      //   Body: uploadFile,
      //   ContentType: uploadFile.type // Optional: specify the content type of the file
      // };

      // console.log('Upload parameters:', params);

      // Upload the file to S3
      // s3Client.upload(params, (err, data) => {
      //   if (err) {
      //     console.error('Upload error:', err);
      //     reject({
      //       error: true,
      //       errorMessage: 'Unable to upload data, try again later',
      //     });
      //   } else {
      //     resolve(data.Location); // S3 URL
      //   }
      // });
    } catch (error) {
      console.error('General error:', error);
      reject({
        error: true,
        errorMessage: 'Unable to upload data, try again later',
      });
    }
  });































// import AWS from 'aws-sdk'
// import { getSecureStsCred, regenerateSecureStsToken } from './Oss.Api'

// // Create an S3 client
// const getS3Client = ({
//   accessKeyId,
//   accessKeySecret,
//   // secretAccessKey,
//   sessionToken,  // AWS STS token
//   ossBucketRegion
// }) => {
//   const s3 = new AWS.S3({
//     region: ossBucketRegion,
//     accessKeyId,
//     accessKeySecret,
//     // secretAccessKey,
//     sessionToken,  // AWS STS token
//     // AWS SDK does not have a direct refreshSTSToken option.
//     // You must handle token refresh separately in your application logic.
//   })
//   console.log(s3);
//   return s3;
// }

// // Formats data similarly to before
// export const formatMultiSelectData = (data) => {
//   const formatedData = data.map(({ value }) => value);
//   return formatedData;
// }

// // Upload file to S3
// export const uploadFile = (file, type) =>
//   new Promise(async (resolve, reject) => {
//     try {
//       let uploadFile = file;
//       const { data } = await getSecureStsCred({
//         name: uploadFile.name,
//         type,
//       });

//       const s3Client = getS3Client(data.data);
//       console.log(s3Client)
//       const params = {
//         Bucket: data.data.ossBucketName,
//         Key: data.data.fileLocation, // File path in S3
//         Body: uploadFile,
//         ContentType: uploadFile.type, // Optional: specify the content type of the file
//       };
//       console.log(params)
//       // Upload the file to S3
//       s3Client.upload(params, (err, data) => {
//         if (err) {
//           console.error(err, 'err');
//           reject({
//             error: true,
//             errorMessage: 'Unable to upload data try again later',
//           });
//         } else {
//           resolve(data.Location); // S3 URL
//         }
//       });
//     } catch (error) {
//       console.error(error, 'err');
//       reject({
//         error: true,
//         errorMessage: 'Unable to upload data try again later',
//       });
//     }
//   });
