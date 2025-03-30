function addTask() {
            let input = document.getElementById("taskInput");
            let task = input.value.trim();
            if (task === "") return;

            let listItem = document.createElement("li");
            listItem.textContent = task;

            let removeButton = document.createElement("button");
            removeButton.textContent = "X";
            removeButton.classList.add("remove-btn");
            removeButton.onclick = function() {
                listItem.remove();
            };

            listItem.appendChild(removeButton);
            document.getElementById("taskList").appendChild(listItem);
            input.value = "";
        }