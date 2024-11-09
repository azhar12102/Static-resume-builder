function toggleSkills() {
    const skillsSection = document.getElementById("skills");
    const toggleButton = document.getElementById("toggleSkillsBtn");

    // Toggle visibility by changing display property
    if (skillsSection.style.display === "none") {
        skillsSection.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    } else {
        skillsSection.style.display = "none";
        toggleButton.textContent = "Show Skills";
    }
}
