<script>
  document.addEventListener("DOMContentLoaded", function () {
    const checkbox = document.getElementById("list-checkbox-1");
    const icon = document.querySelector(".mdl-list__item-avatar");

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        icon.textContent = "assignment_turned_in"; // Symbol ändern, wenn abgehakt
      } else {
        icon.textContent = "assignment"; // Zurücksetzen, wenn nicht abgehakt
      }
    });
  });
</script>
