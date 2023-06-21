// "use client";
// import styled from "@emotion/styled";
// import { Grid, Typography, Button } from "@mui/material";
// import Image from "next/image";
// import { FormEventHandler, useState } from "react";
// import { FaCloudUploadAlt } from "react-icons/fa";
// import { FileContent, useFilePicker } from "use-file-picker";

// interface ParentCompProps {
//   children?: React.ReactNode;
//   handleClick: Function;
// }

// export const StylesFileUploaderGrid = styled((props: ParentCompProps) => (
//   <Grid
//     item
//     container
//     direction="column"
//     {...props}
//     onClick={() => props.handleClick()}
//   >
//     {props.children}
//   </Grid>
// ))(({ theme }) => ({
//   border: "1px dashed #e3e3e3",
//   borderRadius: "8px",
//   padding: "8px",
//   width: "170px",
//   height: "200px",
//   display: "flex",
//   justifyContent: "center",
//   alignContent: "center",
//   "&:hover": {
//     border: "1px dashed #1A81AD",
//     backgroundColor: "#F8F8F8",
//   },
// }));

// interface UploadArgs {
//   title: string;
//   subtitle: string;
//   setSelectedFile: Function;
//   file: string | null;
// }

// interface NoFileArgs {
//   title: string;
//   subtitle: string;
// }

// export default function PassportUploader(props: UploadArgs) {
//   const [openFileSelector, { filesContent, loading, errors, clear }] =
//     useFilePicker({
//       readAs: "DataURL",
//       accept: "image/*",
//       multiple: false,
//       maxFileSize: 1,
//     });

//   if (filesContent.length > 0) {
//     props.setSelectedFile(filesContent[0].content);
//   }

//   return (
//     <>
//       <StylesFileUploaderGrid handleClick={openFileSelector}>
//         {props.file != null ? (
//           <UploadedFile file={props.file} />
//         ) : (
//           <NoFile title={props.title} subtitle={props.subtitle} />
//         )}
//       </StylesFileUploaderGrid>
//     </>
//   );
// }

// const NoFile = (props: NoFileArgs) => {
//   return (
//     <Grid
//       item
//       container
//       direction="column"
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Grid item>
//         <FaCloudUploadAlt size={50} style={{ color: "#AFB0B4" }} />
//       </Grid>
//       <Grid item sx={{  }}>
//         <Typography
//           variant="body1"
//           color="initial"
//           sx={{
//             fontSize: "16px",
//             color: "#000",
//             textAlign: "center",
//           }}
//         >
//           {props.title}
//         </Typography>
//         <Typography
//           variant="body1"
//           color="gray"
//           sx={{ textAlign: "center", fontSize: "14px", lineHeight: 2 }}
//         >
//           {props.subtitle}
//         </Typography>
//       </Grid>

//       {/* <Grid item sx={{ marginTop: 2 }}>
//         <Typography
//           variant="body1"
//           color="initial"
//           sx={{ textAlign: "center", fontSize: "14px", lineHeight: 2 }}
//         >
//           JPG or JPEG
//         </Typography>
//         <Typography
//           variant="body1"
//           color="initial"
//           sx={{ textAlign: "center", fontSize: "14px" }}
//         >
//           Less than 150kb
//         </Typography>
//       </Grid> */}
// {/* 
//       <Grid item sx={{ marginTop: 2 }}>
//         <Typography
//           sx={{
//             paddingX: 3,
//             paddingY: 1,
//             color: "#fff",
//             backgroundColor: "#F92B55",
//           }}
//         >
//           Select File
//         </Typography>
//       </Grid> */}
//     </Grid>
//   );
// };

// const UploadedFile = (props: { file: string }) => {
//   return (
//     <Grid
//       item
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         height: "100px",
//         paddingY:2,
//         width: "100%",
//         position: "relative",
//       }}
//     >
//       <Image width={170} height={200} alt="document" src={props.file} />
//     </Grid>
//   );
// };
