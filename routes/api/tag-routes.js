const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all tags with associated Product data
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: [{ model: Product, through: ProductTag }],
    });
    res.json(tags);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET one tag by its `id` value with associated Product data
router.get('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const tag = await Tag.findByPk(tagId, {
      include: [{ model: Product, through: ProductTag }],
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json(tag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST create a new tag
router.post('/', async (req, res) => {
  try {
    const { tag_name } = req.body;

    const newTag = await Tag.create({ tag_name });

    res.status(201).json(newTag);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const updatedTagName = req.body.tag_name;

    const updatedTag = await Tag.update(
      { tag_name: updatedTagName },
      {
        where: { id: tagId },
      }
    );

    if (!updatedTag[0]) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json({ message: 'Tag updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE one tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const tagId = req.params.id;
    const deletedTag = await Tag.destroy({
      where: { id: tagId },
    });

    if (!deletedTag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json({ message: 'Tag deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
