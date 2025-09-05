// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}! You've been greeted from Rust!", name)
}

use base64;
use std::fs::File;
use std::io::Write;

#[tauri::command]
fn save_base64_image(base64_data: String, file_path: String) -> Result<String, String> {
    // 1. 解码 base64 图片数据
    let image_bytes =
        base64::decode(&base64_data).map_err(|e| format!("Base64 解码失败: {}", e))?;

    // 2. 将字节写入用户选择的文件路径
    let mut file =
        File::create(&file_path).map_err(|e| format!("无法创建文件 {:?}: {}", file_path, e))?;

    file.write_all(&image_bytes)
        .map_err(|e| format!("写入文件失败: {}", e))?;

    // 3. 返回成功信息
    Ok(format!("✅ 图片已保存到: {}", file_path))
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![greet, save_base64_image])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
