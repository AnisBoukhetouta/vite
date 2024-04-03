import React from "react";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateSize from "filepond-plugin-file-validate-size";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginFileValidateSize,
  FilePondPluginFileValidateType,
  FilePondPluginImageResize,
  FilePondPluginImageCrop,
  FilePondPluginImageTransform
);

interface Props {
  setFieldValue: (value: any) => void;
}

// Our app
export default function FileUpload({setFieldValue}: Props) {
  const handleFileUpload = (files) => {
    console.log(files.map((file) => file.file));
    setFieldValue(files.map((file) => file.file))
  };

  return (
    <div className="App">
      <FilePond
        required
        acceptedFileTypes={["application/pdf", "image/*"]}
        fileValidateTypeDetectType={(source, type) =>
          new Promise((resolve, reject) => {
            resolve(type);
          })
        }
        allowFileEncode
        allowImageTransform
        imagePreviewHeight={400}
        imageCropAspectRatio={"1:1"}
        imageResizeTargetWidth={100}
        imageResizeTargetHeight={100}
        imageResizeMode={"cover"}
        imageTransformOutputQuality={50}
        imageTransformOutputQualityMode="optional"
        onupdatefiles={handleFileUpload}
        instantUpload={false}
        allowMultiple={true}
        maxFiles={4}
        name="fileUpload"
        labelIdle='Drag & Drop your Game files or <span class="filepond--label-action">Browse</span>'
      />
    </div>
  );
}
