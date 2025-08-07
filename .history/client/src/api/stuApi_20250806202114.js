// 封装我们的请求函数
import request from "./request";
/**
 * 获取学生列表
 * @returns
 */
export function getStuListApi() {
  return request({
    url: "/students",
    method: "GET",
  })
    .then((response) => {
      console.log("获取学生列表", response.data);
      return response;
    })
    .catch((error) => {
      console.log("获取学生列表失败", error);
      return Promise.reject(error);
    });
}

/**
 * 添加学生
 */
export function addStuApi(data) {
  return request({
    url: "/students",
    method: "POST",
    data,
  })
    .then((response) => {
      console.log("添加学生", response.data);
      return response;
    })
    .catch((error) => {
      console.log("添加学生失败", error);
    });
}
// 根据 id 获取学生详细信息
export function getStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: "GET",
  });
}

// 根据 id 删除学生
export function deleteStuByIdApi(id) {
  return request({
    url: `/students/${id}`,
    method: "DELETE",
  });
}

// 根据 id 编辑学生
export function editStuByIdApi(id, data) {
  return request({
    url: `/students/${id}`,
    method: "PATCH",
    data,
  });
}
