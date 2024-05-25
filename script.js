function formValue() {
  const value = `
・質問のタイトル
  ${document.questionForm.title_input.value}
・実現したいこと
  ${document.questionForm.future_input.value}
・現在の状況
  ${document.questionForm.situation_input.value}
・実現のために試した内容とその結果
  ${document.questionForm.result_input.value}
・調べた内容や資料
  ${document.questionForm.document_input.value}`;
  return value;
}

function createTextFile() {
  const formText = formValue();
  const questionTitle = document.questionForm.title_input.value;
  const blob = new Blob([formText], { type: "text/plain" });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.setAttribute("download", questionTitle + ".txt");
  link.click();
}
function formInputCopy() {
  const formText = formValue();
  navigator.clipboard.writeText(formText).then(() => {
    alert("コピーしました。");
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const createBtn = document.getElementById("createFileBtn");
  const copyBtn = document.getElementById("copyTextBtn");

  createBtn.addEventListener("click", createTextFile);
  copyBtn.addEventListener("click", formInputCopy);
});
