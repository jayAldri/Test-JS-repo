<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

</head>
<body>
  <!-- BUTTON TO OPEN MODAL -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#fillUpModal">
  Add New Record
</button>

<!-- MODAL -->
<div class="modal fade" id="fillUpModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">

      <!-- MODAL HEADER -->
      <div class="modal-header">
        <h5 class="modal-title">Fill Up Form</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>

      <!-- MODAL BODY -->
      <div class="modal-body">
        <form id="myForm">

          <div class="mb-3">
            <label class="form-label">Book title</label>
            <input type="text" class="form-control" placeholder="Enter book title" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Author name</label>
            <input type="text" class="form-control" placeholder="Enter author name" required>
          </div>

          <div class="mb-3">
            <label class="form-label">Message</label>
            <textarea class="form-control" rows="3" required></textarea>
          </div>

          <div class="row">
            <div class="col-sm-6">
              <label class="form-label">ISBN*</label>
              <input type="text" placeholder="978-3-16-148410-0" class="form-control" required>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Published Year*</label>
              <input type="text" placeholder="Published Year *" class="form-control" required>
            </div>

            <div class="dropdown col-sm-6 mt-3">
              <label class="form-label">Genre*</label>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown button
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Fiction</a></li>
                <li><a class="dropdown-item" href="#">Non-Fiction</a></li>
                <li><a class="dropdown-item" href="#">Science Fiction</a></li>
                <li><a class="dropdown-item" href="#">Fantasy</a></li>
                <li><a class="dropdown-item" href="#">Mystery</a></li>
                <li><a class="dropdown-item" href="#">Romance</a></li>
                <li><a class="dropdown-item" href="#">Biography</a></li>
                <li><a class="dropdown-item" href="#">History</a></li>
                <li><a class="dropdown-item" href="#">Science</a></li>
                <li><a class="dropdown-item" href="#">Self-Help</a></li>
              </ul>
            </div>
            <div class="col-sm-6">
              <label class="form-label">Status*</label>
              <input type="text" placeholder="Status*" class="form-control" required>
            </div>
          </div>


        </form>
      </div>

      <!-- MODAL FOOTER -->
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" form="myForm" class="btn btn-primary">Submit</button>
      </div>

    </div>
  </div>
</div>

</body>
</html>