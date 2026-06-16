// download-cwm-help.js
// Run with: node download-cwm-help.js
// Downloads all CWM Help HTML pages from dakshcwm.com into the correct
// public/cwm-help/... folder structure for your React app.

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://dakshcwm.com/wp-content/uploads/cwm-help';
const OUTPUT_DIR = path.join(__dirname, 'public', 'cwm-help');

// All 68 relative paths (matching the sidebar links exactly)
const FILES = [
  '00-Overview/GetStarted.html',

  'Activities/Branching/FlowDecision.html',
  'Activities/Branching/If.html',
  'Activities/Branching/Switch.html',

  'Activities/Composition/Complete.html',

  'Activities/Console/ReadLine.html',
  'Activities/Console/WriteLine.html',

  'Activities/Flow/End.html',
  'Activities/Flow/Flowchart.html',
  'Activities/Flow/FlowNode.html',
  'Activities/Flow/Start.html',

  'Activities/Looping/Break.html',
  'Activities/Looping/For.html',
  'Activities/Looping/ForEach.html',
  'Activities/Looping/While.html',

  'Activities/Primitives/Correlate.html',
  'Activities/Primitives/Fault.html',
  'Activities/Primitives/Finish.html',
  'Activities/Primitives/SetName.html',
  'Activities/Primitives/SetVariable.html',

  'Activities/Scheduling/Cron.html',
  'Activities/Scheduling/Delay.html',
  'Activities/Scheduling/StartAt.html',
  'Activities/Scheduling/Timer.html',

  'Activities/Scripting/RunCSharp.html',
  'Activities/Scripting/RunJavaScript.html',

  'Activities/SolidWorks/GetActiveDoc.html',

  'Activities/SolidWorks/Assembly/CaptureAssemblyParts.html',
  'Activities/SolidWorks/Assembly/CaptureAssemblyStructure.html',
  'Activities/SolidWorks/Assembly/GetAssemblyPartsAll.html',
  'Activities/SolidWorks/Assembly/MatchPartInAssembly.html',
  'Activities/SolidWorks/Assembly/MatchSubAssemblyInAssembly.html',

  'Activities/SolidWorks/BOM/ExportBomToExcel.html',
  'Activities/SolidWorks/BOM/ExtractBomData.html',
  'Activities/SolidWorks/BOM/InsertBomTable.html',
  'Activities/SolidWorks/BOM/ValidateBomData.html',

  'Activities/SolidWorks/Cleanup/SwxCleanupActivity.html',

  'Activities/SolidWorks/Common/AddOrUpdateCustomProperty.html',
  'Activities/SolidWorks/Common/BulkUpdateCustomProperties.html',
  'Activities/SolidWorks/Common/CheckFileType.html',
  'Activities/SolidWorks/Common/FindPropertyPathActivity.html',
  'Activities/SolidWorks/Common/GetAllPartFileFromDirectory.html',
  'Activities/SolidWorks/Common/GetFileName.html',
  'Activities/SolidWorks/Common/GetFullPath.html',
  'Activities/SolidWorks/Common/OpenSolidWorksFile.html',
  'Activities/SolidWorks/Common/Save.html',
  'Activities/SolidWorks/Common/SaveAs.html',
  'Activities/SolidWorks/Common/SwxCleanupActivity.html',
  'Activities/SolidWorks/Common/UserConfigurablePartProcessor.html',
  'Activities/SolidWorks/Common/ValidateCustomProperties.html',

  'Activities/SolidWorks/Drawing/AddNewSheet.html',
  'Activities/SolidWorks/Drawing/ExportDrawingToPDF.html',
  'Activities/SolidWorks/Drawing/GetActiveSheetName.html',
  'Activities/SolidWorks/Drawing/GetSheetNames.html',
  'Activities/SolidWorks/Drawing/SetActiveSheet.html',

  'Activities/SolidWorks/Part/ExtractCustomProperties.html',
  'Activities/SolidWorks/Part/ExtractPartData.html',
  'Activities/SolidWorks/Part/GetAndSaveThumbnail.html',
  'Activities/SolidWorks/Part/GetFeatureByName.html',
  'Activities/SolidWorks/Part/GetPartMaterial.html',
  'Activities/SolidWorks/Part/GetSurfaceArea.html',
  'Activities/SolidWorks/Part/GetVolume.html',
  'Activities/SolidWorks/Part/HasFeatureTreeErrors.html',
  'Activities/SolidWorks/Part/IsMultiBodyPart.html',
  'Activities/SolidWorks/Part/SetDocumentUnitSystem.html',

  'Activities/SolidWorks/SheetMetal/CheckAndConvertToSheetMetal.html',
  'Activities/SolidWorks/SheetMetal/CheckAndInsertBends.html',
  'Activities/SolidWorks/SheetMetal/CheckIfSheetMetal.html',
  'Activities/SolidWorks/SheetMetal/ExportSheetMetalToDxf.html',

  'Activities/System/Directory/CreateDirectory.html',

  'Activities/System/Excel/CleanExcelNewlines.html',
  'Activities/System/Excel/CompareExcelFiles.html',
  'Activities/System/Excel/ReadExcelFile.html',
  'Activities/System/Excel/UpdateExcelCell.html',
  'Activities/System/Excel/WriteExcelFile.html',

  'Activities/System/File/CombinePath.html',
  'Activities/System/File/CopyFile.html',
  'Activities/System/File/CreateFile.html',
  'Activities/System/File/DeleteFile.html',
  'Activities/System/File/GetDirectoryName.html',
  'Activities/System/File/GetExtension.html',
  'Activities/System/File/GetFileAttributes.html',
  'Activities/System/File/GetFileCreationTime.html',
  'Activities/System/File/GetFileLastAccessTime.html',
  'Activities/System/File/GetFileLastWriteTime.html',
  'Activities/System/File/GetFileName.html',
  'Activities/System/File/GetFileNameWithoutExtension.html',
  'Activities/System/File/GetFiles.html',
  'Activities/System/File/GetFileSize.html',
  'Activities/System/File/GetFileSystemEntries.html',
  'Activities/System/File/GetTempPath.html',
  'Activities/System/File/MoveFile.html',
  'Activities/System/File/SetFileAttributes.html',

  'Activities/System/UserInput/GetUserInput.html',

  'Activities/Workflows/Parallel.html',
  'Activities/Workflows/Sequence.html',
];

function download(relativePath) {
  return new Promise((resolve) => {
    const url = `${BASE_URL}/${relativePath}`;
    const destPath = path.join(OUTPUT_DIR, relativePath);
    const destDir = path.dirname(destPath);

    fs.mkdirSync(destDir, { recursive: true });

    https.get(url, (res) => {
      if (res.statusCode !== 200) {
        console.error(`✗ ${relativePath} -> HTTP ${res.statusCode}`);
        res.resume();
        return resolve({ relativePath, ok: false, status: res.statusCode });
      }

      const fileStream = fs.createWriteStream(destPath);
      res.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✓ ${relativePath}`);
        resolve({ relativePath, ok: true });
      });
    }).on('error', (err) => {
      console.error(`✗ ${relativePath} -> ${err.message}`);
      resolve({ relativePath, ok: false, error: err.message });
    });
  });
}

async function run() {
  console.log(`Downloading ${FILES.length} files into ${OUTPUT_DIR}\n`);

  const results = [];
  // Download sequentially to avoid hammering the server
  for (const file of FILES) {
    const result = await download(file);
    results.push(result);
  }

  const failed = results.filter((r) => !r.ok);
  console.log(`\nDone. ${results.length - failed.length}/${results.length} succeeded.`);

  if (failed.length) {
    console.log('\nFailed files:');
    failed.forEach((f) => console.log(`  - ${f.relativePath} (${f.status || f.error})`));
  }
}

run();
