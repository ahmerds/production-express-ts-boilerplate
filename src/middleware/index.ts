import {
    handleCors,
    handleBodyRequestParsing,
    handleCompression
} from "./common";

export default [handleBodyRequestParsing, handleCompression, handleCors];