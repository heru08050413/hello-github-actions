// QQ 音乐 VIP 解锁脚本
const response = $response.body;

// 在这里修改返回的 JSON 数据，解锁 VIP 权限
const jsonResponse = JSON.parse(response);

// 假设返回的数据包含一个 "vip" 字段，我们可以将其设置为 true
if (jsonResponse && jsonResponse.data) {
    jsonResponse.data.vip = true;  // 设置为 VIP
    jsonResponse.data.vipLevel = 10;  // 设置为最高等级
    jsonResponse.data.vipType = 1;   // 设置为普通 VIP
}

// 通过修改后的 JSON 响应返回
$done({ body: JSON.stringify(jsonResponse) });
