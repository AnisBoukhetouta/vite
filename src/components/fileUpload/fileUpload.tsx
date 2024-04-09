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
  height: number;
  maxFiles?: number;
  fieldName: string;
  title: string;
  setFieldValue: (value: any) => void;
}

// Our app
export default function FileUpload({
  maxFiles,
  height,
  title,
  fieldName,
  setFieldValue,
}: Props) {
  const handleFileUpload = (files) => {
    setFieldValue(files.map((file) => file.file));
  };

  return (
    <div className="App">
      <FilePond
        allowFileEncode
        allowImageTransform
        imagePreviewHeight={height}
        imageCropAspectRatio={"1:1"}
        imageResizeTargetWidth={100}
        imageResizeTargetHeight={100}
        imageResizeMode={"cover"}
        imageTransformOutputQuality={50}
        imageTransformOutputQualityMode="optional"
        onupdatefiles={handleFileUpload}
        instantUpload={false}
        allowMultiple={Number(maxFiles) > 1 ? true : false}
        maxFiles={maxFiles}
        name={fieldName}
        labelIdle={`Drag & Drop your ${title} or <span class="filepond--label-action">Browse</span>`}
      />
    </div>
  );
}
